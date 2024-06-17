'use client';
import Head from 'next/head';
import Link from 'next/link';

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
            <svg className="h-5 w-5 mr-2" viewBox="0 0 48 48">
              <path
                d="M44.5 20H24v8.5h11.9C34.6 33.7 29.7 37 24 37c-7.7 0-14-6.3-14-14s6.3-14 14-14c3.3 0 6.4 1.2 8.7 3.2L38.1 7C34.1 3.4 29.2 1 24 1 11.8 1 2 10.8 2 23s9.8 22 22 22c11 0 20.1-7.7 21.9-18h-1.4v-7z"
                fill="#4285F4"
              />
              <path
                d="M6.3 14.8l6.6 4.8C14.7 15.9 19 13 24 13c3.3 0 6.4 1.2 8.7 3.2L38.1 7C34.1 3.4 29.2 1 24 1 15.3 1 8 6.5 6.3 14.8z"
                fill="#34A853"
              />
              <path
                d="M24 47c5.5 0 10.6-2.1 14.5-5.6l-6.8-5.3C29.7 37 24 37 24 37c-5.5 0-10.2-3.5-11.8-8.4l-6.8 5.3C8 44 15.5 47 24 47z"
                fill="#FBBC05"
              />
              <path
                d="M44.5 20H24v8.5h11.9C34.6 33.7 29.7 37 24 37c-7.7 0-14-6.3-14-14s6.3-14 14-14c3.3 0 6.4 1.2 8.7 3.2L38.1 7C34.1 3.4 29.2 1 24 1 11.8 1 2 10.8 2 23s9.8 22 22 22c11 0 20.1-7.7 21.9-18h-1.4v-7z"
                fill="none"
              />
            </svg>
            Continue with Google
          </button>
        </div>
        <p className="text-center text-gray-700">Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
}
