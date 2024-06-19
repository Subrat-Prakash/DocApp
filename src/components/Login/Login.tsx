"use client";
import Head from 'next/head';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log("Google sign-in clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In to Your Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <label htmlFor="remember_me" className="inline-flex items-center">
                <input type="checkbox" id="remember_me" className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
            </div>
            <div>
              <Link href="/forgot-password" className="text-blue-600 hover:underline">Forgot your password?</Link>
            </div>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Sign In</button>
          </div>
        </form>
        <div className="my-4 flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </div>
        <p className="text-center text-gray-700">Do not have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}
