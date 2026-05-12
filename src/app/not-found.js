import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-cyan-500 mb-4">
          404
        </div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Looks like you've wandered off the beaten path! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Travel-themed illustration */}
        <div className="mb-8">
          <svg className="w-32 h-32 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        {/* Back to Homepage Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Homepage
        </Link>
        
        {/* Additional Links */}
        <div className="mt-8 text-gray-600">
          <p className="mb-2">Or explore our popular destinations:</p>
          <div className="flex justify-center gap-4">
            <Link href="/destinations" className="text-cyan-500 hover:text-cyan-600 underline">
              Destinations
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/bookings" className="text-cyan-500 hover:text-cyan-600 underline">
              My Bookings
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/admin" className="text-cyan-500 hover:text-cyan-600 underline">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
