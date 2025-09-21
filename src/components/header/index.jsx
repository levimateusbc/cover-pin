import { useState } from "react";
import Button from "../button";

export default function Header({ currentView, setCurrentView }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#F7F7F7] sticky top-0 z-50 pt-2 pb-2 mb-16 w-full border-b border-[#E0E0E0] ">
      <div className="px-4 py-4 flex flex-col md:flex-row justify-between items-center md:gap-0 gap-4">
        <div className="flex w-full md:w-auto justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            <img
              src="src/assets/logo.svg"
              alt="Dashboard logo featuring a stylized green leaf with the word Dashboard in bold modern font, set against a clean white background, conveying a professional and welcoming tone"
            />
          </h1>
          <Button
            label=""
            kind="icon"
            onClick={handleToggleMenu}
            className="md:hidden text-[#022C22] focus:outline-none"
            icon={
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
            }
          />
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
                ? "bg-[#022C22] text-white"
                : "text-[#1D1F13] hover:bg-green-800 hover:text-white"
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
                ? "bg-[#022C22] text-white"
                : "text-[#1D1F13] hover:bg-green-800 hover:text-white"
            }`}
          >
            Opportunities
          </button>
        </nav>
      </div>
    </header>
  );
}
