import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long']
    },
    userType: {
      type: String,
      enum: ['patient', 'doctor'],
      default: 'patient',
      required: [true, 'User type is required']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  });
  

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;