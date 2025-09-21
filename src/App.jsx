import { useEffect, useState } from "react";
import leadsData from "./leads.json";
import SearchFilterSort from "./components/search";
import LeadDetailPanel from "./components/details";
import OpportunitiesTable from "./components/opportunities";
import Table from "./components/table";
import NewLeadForm from "./components/form";
import Header from "./components/header";
import NewLeadFormModal from "./components/form";
import Button from "./components/button";
import Footer from "./components/footer";

function App() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState("leads");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByScoreDesc, setSortByScoreDesc] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setLeads(leadsData);
        setFilteredLeads(leadsData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load leads.", err);
        setLoading(false);
      }
    }, 500);
  }, []);

  useEffect(() => {
    let temp = [...leads];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(
        (lead) =>
          lead.name.toLowerCase().includes(term) ||
          lead.company.toLowerCase().includes(term)
      );
    }

    if (filterStatus) {
      temp = temp.filter((lead) => lead.status === filterStatus);
    }

    if (sortByScoreDesc) {
      temp.sort((a, b) => b.score - a.score);
    }

    setFilteredLeads(temp);
  }, [leads, searchTerm, filterStatus, sortByScoreDesc]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilter = (status) => setFilterStatus(status);
  const handleSort = () => setSortByScoreDesc((prev) => !prev);
  const handleSelectLead = (lead) => setSelectedLead(lead);
  const handleClosePanel = () => setSelectedLead(null);

  const handleUpdateLead = (updatedLead) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead))
    );
    setSelectedLead(updatedLead);
  };

  const handleConvertLead = (lead) => {
    const newOpportunity = {
      id: `${opportunities.length + 1}`,
      name: lead.name,
      stage: "New Opportunity",
      amount: null,
      accountName: lead.company,
    };

    setOpportunities((prev) => [...prev, newOpportunity]);

    handleUpdateLead({ ...lead, status: "converted" });
    handleClosePanel();
  };

  const handleAddNewLead = (newLead) => {
    setLeads((prev) => [...prev, { id: prev.length + 1, ...newLead }]);
    setCurrentView("leads");
  };

  return (
    <div className="p-0 bg-neutralBg text-neutralText ">
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {loading && (
        <div className="text-center text-neutralGray">Loading leads...</div>
      )}

      {error && (
        <div className="text-center text-error font-semibold">{error}</div>
      )}

      {currentView === "leads" && (
        <div className="px-6 pb-6">
          <SearchFilterSort
            onSearch={handleSearch}
            onFilter={handleFilter}
            onSort={handleSort}
            onCreateNewLead={() => setIsModalOpen(true)}
          />

          <Table leads={filteredLeads} onSelectLead={handleSelectLead} />

          {selectedLead && (
            <LeadDetailPanel
              lead={selectedLead}
              onClose={handleClosePanel}
              onUpdate={handleUpdateLead}
              onConvert={handleConvertLead}
            />
          )}
        </div>
      )}

      {currentView === "opportunities" && (
        <div className="px-6 pb-6">
          <Button label="Back" onClick={() => setCurrentView("leads")} />
          <OpportunitiesTable opportunities={opportunities} />
        </div>
      )}

      {currentView === "new-lead" && (
        <>
          <Button label="Back" onClick={() => setCurrentView("leads")} />
          <NewLeadForm
            onAdd={handleAddNewLead}
            onCancel={() => setCurrentView("leads")}
          />
        </>
      )}
      {isModalOpen && (
        <NewLeadFormModal
          isOpen={isModalOpen}
          onAdd={(newLead) => {
            handleAddNewLead(newLead);
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
