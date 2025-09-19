export default function Header({ currentView, setCurrentView }) {
  return (
    <header className="bg-green-900 shadow-md sticky top-0 z-50 pt-2 pb-2 mb-16">
      <div className="px-4 py-4 flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          Mini Seller Console
        </h1>

        <nav className="flex gap-3">
          <button
            onClick={() => setCurrentView("leads")}
            className={`cursor-pointer px-5 py-3 rounded font-semibold transition text-lg ${
              currentView === "leads"
                ? "bg-green-700 text-white"
                : "text-green-300 hover:bg-green-800 hover:text-white"
            }`}
          >
            Leads
          </button>

          <button
            onClick={() => setCurrentView("opportunities")}
            className={`cursor-pointer px-5 py-3 rounded font-semibold transition text-lg ${
              currentView === "opportunities"
                ? "bg-green-700 text-white"
                : "text-green-300 hover:bg-green-800 hover:text-white"
            }`}
          >
            Oportunidades
          </button>
        </nav>
      </div>
    </header>
  );
}
