import React from 'react'

function page() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/stock-market-economic-graph-with-diagrams-business-financial-concepts-reports-abstract-technology-communication-concept-background_29865-1321.jpg?semt=ais_hybrid')`, // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

      {/* Header */}
      <header className="absolute top-0 w-full px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase">
          <span className="text-indigo-500">Finance</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium">
          {["About", "Services", "Pricing", "Portfolio", "Team", "Blog", "Testimonial"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-500 transition duration-300"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#single-page"
            className="hover:text-indigo-500 transition duration-300"
          >
            Single Page
          </a>
        </nav>
      </header>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
          One of The <br />
          <span className="text-indigo-500">Leading Financial Advisors</span>
        </h1>
        <p className="text-lg sm:text-xl font-light mb-8 max-w-xl mx-auto">
          Helping you achieve financial stability and long-term growth with expert guidance.
        </p>
        <a
          href="#services"
          className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg transition-transform duration-300 transform hover:scale-105"
        >
          Explore Services
        </a>
      </div>

      {/* Floating Widget */}
      <div className="absolute bottom-6 right-6">
        <button
          className="w-12 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white text-lg font-bold transition duration-300"
          title="Chat with us"
        >
          💬
        </button>
      </div>
    </div>
  )
}

export default page
