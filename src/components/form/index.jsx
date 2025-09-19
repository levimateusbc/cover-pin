import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidation';

export default function NewLeadForm({ onAdd, onCancel }) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [source, setSource] = useState('');
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('new');

  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!name || !company || !email) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid Email');
      return;
    }

    const newLead = {
      id: `${Date.now()}`,
      name,
      company,
      email,
      source,
      score: parseInt(score),
      status,
    };

    onAdd(newLead);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Novo Lead</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="p-2 border rounded"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Empresa"
          className="p-2 border rounded"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fonte"
          className="p-2 border rounded"
          value={source}
          onChange={e => setSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Score"
          className="p-2 border rounded"
          value={score}
          onChange={e => setScore(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="new">Novo</option>
          <option value="contacted">Contactado</option>
          <option value="converted">Convertido</option>
        </select>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <button onClick={onCancel} className="px-4 py-2 text-gray-600">
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Adicionar Lead
        </button>
      </div>
    </div>
  );
}
