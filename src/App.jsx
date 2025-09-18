import { useState } from "react";

const initialLeads = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", telefone: "123-456-7890" },
  { id: 2, nome: "Bruno Costa", email: "bruno@email.com", telefone: "987-654-3210" },
];

export default function App() {
  const [leads, setLeads] = useState(initialLeads);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  function abrirModal() {
    setForm({ nome: "", email: "", telefone: "" });
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function adicionarLead(e) {
    e.preventDefault();
    if (!form.nome || !form.email) return alert("Preencha nome e email");
    setLeads([...leads, { id: Date.now(), ...form }]);
    fecharModal();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard de Leads</h1>
        <button
          onClick={abrirModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Adicionar Lead
        </button>
      </header>

      <table className="w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="text-left p-4">Nome</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(({ id, nome, email, telefone }) => (
            <tr key={id} className="border-b last:border-0 hover:bg-blue-50 transition">
              <td className="p-4">{nome}</td>
              <td className="p-4">{email}</td>
              <td className="p-4">{telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={fecharModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Fechar modal"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Adicionar Lead</h2>
            <form onSubmit={adicionarLead} className="space-y-4">
              <input
                name="nome"
                placeholder="Nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="telefone"
                placeholder="Telefone"
                value={form.telefone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Adicionar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
