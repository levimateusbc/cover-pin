import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidation';

export default function LeadDetailPanel({ lead, onClose, onUpdate, onConvert }) {
  const [email, setEmail] = useState(lead.email);
  const [status, setStatus] = useState(lead.status);
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    onUpdate({ ...lead, email, status });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full shadow-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Lead Details</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            Close
          </button>
        </div>

        <div className="flex flex-col gap-4 flex-grow overflow-y-auto">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 text-gray-900">{lead.name}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <div className="mt-1 text-gray-900">{lead.company}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="mt-1 border border-gray-300 rounded px-3 py-2 w-full"
            >
              <option value="new">New</option>
              <option value="screening">Screening</option>
              <option value="interviewed">Interviewed</option>
              <option value="offered">Offered</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={() => onConvert(lead)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Convert to Opportunity
          </button>
        </div>
      </div>
    </div>
  );
}
