import Head from 'next/head';
import Link from 'next/link';
import { User, Mail, Lock } from 'lucide-react';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up - NextCart</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl flex rounded-lg shadow-lg overflow-hidden bg-white">
          {/* Left Branding Section */}
          <div className="w-1/2 bg-cyan-600 text-white p-10 flex flex-col justify-center hidden md:flex">
            <h1 className="text-3xl font-bold mb-4">NextCart</h1>
            <p className="text-lg">Join now and make every wish count</p>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-sm text-gray-600 mb-6">Create your account to get started</p>

            <form className="space-y-4">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>

              {/* Email / Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email or Mobile Number"
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition w-full"
              >
                Create Account
              </button>

              {/* Link to Login */}
              <p className="text-sm text-center text-gray-600 mt-2">
                Already have an account?{' '}
                <Link href="/register" className="text-cyan-600 font-medium hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
