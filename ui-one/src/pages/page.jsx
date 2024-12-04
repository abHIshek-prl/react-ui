import React from 'react';

function NotFoundPage() {
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="text-center">
        <h1 className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          404
        </h1>
        <p className="mt-6 text-xl font-light text-gray-300">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-gray-500">
          It might have been moved or deleted.
        </p>
        <button
          
          className="px-8 py-3 mt-8 font-semibold text-black rounded-md shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105"
        >
          Back to Homepage
        </button>
      </div>
      <div className="absolute flex items-center space-x-2 text-gray-500 bottom-10">
        <span>Powered by</span>
        <span className="font-semibold text-emerald-700">Abhishek</span>
      </div>
    </div>
  );
}

export default NotFoundPage;
