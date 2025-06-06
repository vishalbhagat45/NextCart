import Head from 'next/head';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register - NextCart</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl flex rounded-lg shadow-lg overflow-hidden bg-white">
          {/* Left Section (Blue Branding) */}
          <div className="w-1/2 bg-cyan-600 text-white p-10 flex flex-col justify-center hidden md:flex">
            <h1 className="text-3xl font-bold mb-4">NextCart</h1>
            <p className="text-lg">Ab har wish hogi poori</p>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-2">Login</h2>
            <p className="text-sm text-gray-600 mb-6">Get access to your Orders, Wishlist and Recommendations</p>

            <form className="space-y-4">
              {/* Email / Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Email/Mobile number"
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full border border-gray-300 rounded px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <span className="absolute right-3 top-2.5 text-sm text-blue-600 cursor-pointer">Forgot?</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition w-full"
                >
                  Login
                </button>
                <Link
                  href="/signup"
                  className="border border-cyan-600 text-blue-600 px-6 py-2 rounded text-center hover:bg-cyan-50 transition w-full"
                >
                  Sign up
                </Link>
              </div>

              {/* Info */}
              <p className="text-xs text-gray-500 mt-4">
                {/* We no longer support login via social accounts. To recover your old accounts please{' '} */}
                {/* <a href="#" className="text-blue-600 underline">click here</a>. */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
