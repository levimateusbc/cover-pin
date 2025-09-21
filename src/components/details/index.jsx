import { useState } from 'react';
import { isValidEmail } from '../../utils/emailValidation';
import Button from '../button';
import Input from '../input';

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
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/10 transition-all duration-300 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full shadow-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Lead Details</h2>
          <Button label="X" onClick={onClose} kind='tertiary' />
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
            <Input kind={'email'} holder={'Enter email'} value={email} setValue={setEmail}/>
           
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
          <Button label="Cancel" onClick={onClose} kind='tertiary'/>
          <Button label="Save" onClick={handleSave} kind=''/>
          <Button label="Convert to Opportunity" onClick={() => onConvert(lead)} kind='secondary'/>
        </div>
      </div>
    </div>
  );
}
