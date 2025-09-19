export default function Header({ currentView, setCurrentView }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          Mini Seller Console
        </h1>

        <nav className="flex gap-2">
          <button
            onClick={() => setCurrentView("leads")}
            className={`px-4 py-2 rounded ${
              currentView === "leads"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            Leads
          </button>

          <button
            onClick={() => setCurrentView("opportunities")}
            className={`px-4 py-2 rounded ${
              currentView === "opportunities"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            Oportunidades
          </button>

          <button
            onClick={() => setCurrentView("new-lead")}
            className={`px-4 py-2 rounded ${
              currentView === "new-lead"
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100"
            }`}
          >
            + Novo Lead
          </button>
        </nav>
      </div>
    </header>
  );
}
