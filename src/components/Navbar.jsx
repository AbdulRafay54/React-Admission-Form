import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-400 p-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Innovatrix Academy
        </div>
        <div>
          <button aria-label="Toggle Dark Mode">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/moon-symbol.png"
              alt="Dark Mode Toggle"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
