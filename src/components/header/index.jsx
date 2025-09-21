import { useState } from "react";

export default function Header({ currentView, setCurrentView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-900 shadow-md sticky top-0 z-50 pt-2 pb-2 mb-16 w-full">
      <div className="px-4 py-4 flex flex-col md:flex-row justify-between items-center md:gap-0 gap-4">
      
        <div className="flex w-full md:w-auto justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            Mini Seller Console
          </h1>

        
          <button
            className="md:hidden text-green-100 focus:outline-none"
            onClick={handleToggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

      
        <nav
          className={`flex-col md:flex-row gap-2 md:gap-3 md:flex ${
            isMenuOpen ? "flex" : "hidden"
          } w-full md:w-auto md:items-center`}
        >
          <button
            onClick={() => {
              setCurrentView("leads");
              setIsMenuOpen(false); 
            }}
            className={`cursor-pointer px-4 py-2 md:px-5 md:py-3 rounded font-semibold transition text-base md:text-lg ${
              currentView === "leads"
                ? "bg-green-700 text-white"
                : "text-green-300 hover:bg-green-800 hover:text-white"
            }`}
          >
            Leads
          </button>

          <button
            onClick={() => {
              setCurrentView("opportunities");
              setIsMenuOpen(false); 
            }}
            className={`cursor-pointer px-4 py-2 md:px-5 md:py-3 rounded font-semibold transition text-base md:text-lg ${
              currentView === "opportunities"
                ? "bg-green-700 text-white"
                : "text-green-300 hover:bg-green-800 hover:text-white"
            }`}
          >
            Opportunities
          </button>
        </nav>
      </div>
    </header>
  );
}
