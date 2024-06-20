import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { toast } from "react-hot-toast";


// Connect to the database
connect();

export async function POST(request: { json: () => any; }) {
  try {
    const reqBody = await request.json();
    const { username, email, password, userType } = reqBody;

    console.log(reqBody);

    // Check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      userType // Added userType to the new user creation
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    // Send verification email
   // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser
    });

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}