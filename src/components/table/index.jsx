import React from 'react';

export default function Table({ leads, onSelectLead }) {
  if (leads.length === 0) {
    return <div className="p-4 text-center text-gray-500">No leads found.</div>;
  }

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="text-left p-3">Name</th>
          <th className="text-left p-3">Company</th>
          <th className="text-left p-3">Email</th>
          <th className="text-left p-3">Score</th>
          <th className="text-left p-3">Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map(lead => (
          <tr
            key={lead.id}
            className="border-b last:border-0 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelectLead(lead)}
          >
            <td className="p-3">{lead.name}</td>
            <td className="p-3">{lead.company}</td>
            <td className="p-3">{lead.email}</td>
            <td className="p-3">{lead.score}</td>
            <td className="p-3 capitalize">{lead.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
