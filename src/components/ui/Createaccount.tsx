import Link from 'next/link';
import { SignInButton } from '@clerk/nextjs'

const SignInPrompt = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 text-white">
      <header className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200'>
          Welcome to LinkedIn 2.0
        </h1>
        <h3 className='text-xl sm:text-2xl lg:text-3xl text-blue-200'>
          An improved version for a better experience
        </h3>
      </header>
      
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform transition-all hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Sign In Required
            </h2>
            <p className="mt-2 text-center text-sm text-blue-200">
              Please sign in to access LinkedIn 2.0 and enjoy its features.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <SignInButton mode="modal">
              <button className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                Sign In
              </button>
            </SignInButton>
            <div className="text-sm text-center">
              <p className="font-medium text-blue-100">
                Don't have an account?{' '}
                <Link href="/sign-up" className="font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 underline">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPrompt;