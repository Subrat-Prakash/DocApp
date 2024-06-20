import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { toast } from "react-hot-toast";
import jwt from 'jsonwebtoken';



connect();

export async function POST(request: NextRequest) {
    await connect();
  
    try {
      const reqBody = await request.json();
      const { email, password, username, userType } = reqBody;
      console.log(reqBody);
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
      }
  
      // Hash the password
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      // Create new user
      const newUser = new User({
        email,
        password: hashedPassword,
        username,
        userType,
      });
      await newUser.save();
  
      // Create token data
      const tokenData = {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      };
  
      // Create token
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });
  
      // Create response
      const response = NextResponse.json({
        message: "Signup successful",
        success: true,
      });
  
      // Set cookie
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60,  // 1 day
        path: '/',
      });
  
      return response;
  
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }