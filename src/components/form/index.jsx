import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidation';
import Input from '../input';
import Button from '../button';

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
      setError('Fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email');
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
        <Input kind='text' holder='Name *' value={name} setValue={setName} />
        <Input kind='text' holder='Company *' value={company} setValue={setCompany} />
        <Input kind='email' holder='Email *' value={email} setValue={setEmail} />
        <Input kind='text' holder='Source' value={source} setValue={setSource} />
        <Input kind='number' holder='Score' value={score} setValue={setScore} />

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
        <Button label="Cancel" onClick={onCancel} kind='tertiary' />
        <Button
          label="Add Lead"onClick={handleSubmit} kind='primary'
        />
      </div>
    </div>
  );
}

      


