// import { useState } from "react";
// import Button from "./components/button";
// import Table from "./components/table";
// const initialLeads = [
//   {
//     id: 1,
//     nome: "Ana Silva",
//     email: "ana@email.com",
//     telefone: "123-456-7890",
//   },
//   {
//     id: 2,
//     nome: "Bruno Costa",
//     email: "bruno@email.com",
//     telefone: "987-654-3210",
//   },
// ];

// export default function App() {
//   const [leads, setLeads] = useState(initialLeads);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
//   //  TODO: call on button
//   function abrirModal() {
//     setForm({ nome: "", email: "", telefone: "" });
//     setModalOpen(true);
//   }

//   function fecharModal() {
//     setModalOpen(false);
//   }

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function adicionarLead(e) {
//     e.preventDefault();
//     if (!form.nome || !form.email) return alert("Preencha nome e email");
//     setLeads([...leads, { id: Date.now(), ...form }]);
//     fecharModal();
//   }

//   return (
//     <div className="min-h-screen bg-sky-700 p-8 font-sans">
//       <header className="mb-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-gray-800">Dashboard de Leads</h1>
//         <Button onClick={() => abrirModal()} />
//       </header>
//       {/* Form */}
//       <Table leadProp={leads}/>
//       {/* Modal */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
//             <button
//               onClick={fecharModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               aria-label="Fechar modal"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-semibold mb-4">Adicionar Lead</h2>
//             <form onSubmit={adicionarLead} className="space-y-4">
//               <input
//                 name="nome"
//                 placeholder="Nome"
//                 value={form.nome}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//               <input
//                 name="telefone"
//                 placeholder="Telefone"
//                 value={form.telefone}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//               >
//                 Adicionar
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import  { useEffect, useState } from 'react';
import leadsData from './leads.json';
import SearchFilterSort from './components/search';
import LeadDetailPanel from './components/details';
import OpportunitiesTable from './components/opportunities';
import Table from './components/table';
function App() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filtros/sort estado
  const [filterStatus, setFilterStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByScoreDesc, setSortByScoreDesc] = useState(false);

  useEffect(() => {
    // simula latência
    setTimeout(() => {
      try {
        setLeads(leadsData);
        setFilteredLeads(leadsData);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os leads.');
        setLoading(false);
        console.log(err)
      }
    }, 500);
  }, []);

  // efeitos de filtragem / busca / ordenação
  useEffect(() => {
    let temp = [...leads];

    if (searchTerm) {
      temp = temp.filter(l =>
        l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus) {
      temp = temp.filter(l => l.status === filterStatus);
    }

    if (sortByScoreDesc) {
      temp.sort((a, b) => b.score - a.score);
    }

    setFilteredLeads(temp);
  }, [leads, searchTerm, filterStatus, sortByScoreDesc]);

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilter = (status) => setFilterStatus(status);
  const handleSort = () => setSortByScoreDesc(prev => !prev);

  const handleSelectLead = (lead) => setSelectedLead(lead);

  const handleClosePanel = () => setSelectedLead(null);

  const handleUpdateLead = (updatedLead) => {
    setLeads(prev => prev.map(l => l.id === updatedLead.id ? updatedLead : l));
    setSelectedLead(updatedLead);
  };

  const handleConvertLead = (leadToConvert) => {
    const newOpportunity = {
      id: `${opportunities.length + 1}`,
      name: leadToConvert.name,
      stage: 'New Opportunity',
      amount: null,
      accountName: leadToConvert.company
    };
    setOpportunities(prev => [...prev, newOpportunity]);
    // opcional: marcar lead status como "converted"
    handleUpdateLead({ ...leadToConvert, status: 'converted' });
    // fechar painel
    handleClosePanel();
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Mini Seller Console</h1>

      {loading && <div className="text-center text-gray-500">Carregando leads...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      {!loading && !error && (
        <>
          <SearchFilterSort
            onSearch={handleSearch}
            onFilter={handleFilter}
            onSort={handleSort}
          />

          <Table
            leads={filteredLeads}
            onSelectLead={handleSelectLead}
          />

          {selectedLead && (
            <LeadDetailPanel
              lead={selectedLead}
              onClose={handleClosePanel}
              onUpdate={handleUpdateLead}
              onConvert={handleConvertLead}
            />
          )}

          <OpportunitiesTable opportunities={opportunities} />
        </>
      )}
    </div>
  );
}

export default App;
