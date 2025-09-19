import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidation';

export default function NewLeadForm({ onAdd, onCancel }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [score, setScore] = useState('');
  const [status, setStatus] = useState('new');

  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !company || !email) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Email inválido');
      return;
    }

    const newLead = {
      id: `${Date.now()}`,
      name,
      company,
      email,
      source,
      score: parseInt(score) || 0,
      status,
    };

    onAdd(newLead);
  };

  return (
    <div className="bg-white p-6 rounded shadow font-sans max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-green-900">New Lead</h2>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Nome *"
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company *"
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email *"
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fonte"
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={source}
          onChange={e => setSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={score}
          onChange={e => setScore(e.target.value)}
          min="0"
        />
        <select
          className="p-3 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
        </select>
      </div>

      <div className="flex justify-end mt-6 gap-3">
        <button
          onClick={onCancel}
          className="px-5 py-2 text-green-700 border border-green-700 rounded hover:bg-green-100 transition"
        >
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition"
        >
          Add Lead
        </button>
      </div>
    </div>
  );
}
