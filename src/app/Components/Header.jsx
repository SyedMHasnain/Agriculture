import React from "react";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(./header-background.jpg)" }}>
      <div className="flex flex-col items-center justify-center h-full text-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Innovating Agriculture for a Sustainable Future
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Our first agricultural project in Sindh offering investors a prime
          20-acre site.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md">
          Sign Up to Access Opportunity
        </button>
      </div>
    </header>
  );
};

export default Header;
