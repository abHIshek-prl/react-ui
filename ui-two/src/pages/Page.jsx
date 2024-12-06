import React from 'react'

function Page() {
  return (
    <div>
     <div className="min-h-screen bg-gradient-to-r from-purple-800 via-blue-900 to-purple-900 text-white font-sans">
      
      <nav className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Travelling</h1>
        <ul className="flex gap-6">
          <li className="hover:text-gray-300 cursor-pointer">Discover</li>
          <li className="hover:text-gray-300 cursor-pointer">Special Deals</li>
          <li className="hover:text-gray-300 cursor-pointer">Community</li>
          <li className="hover:text-gray-300 cursor-pointer">About Us</li>
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Register</button>
      </nav>

      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 py-16 lg:py-32">
        <div className="text-center lg:text-left max-w-lg space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold leading-snug">
            Travel, enjoy and live a new and full life
          </h2>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full flex items-center gap-2 mx-auto lg:mx-0">
            
            Play Demo
          </button>
        </div>

        
        <div className="relative">
          <img
            src="https://pics.clipartpng.com/Airplane_PNG_Clipart-421.png"
            alt="Airplane"
            className="w-full lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  


    </div>
  )
}

export default Page
