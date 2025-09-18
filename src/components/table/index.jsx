import React from 'react';

export default function Table({ leads, onSelectLead }) {
  if (leads.length === 0) {
    return <div className="p-4 text-center text-gray-500">Nenhum lead encontrado.</div>;
  }

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="text-left p-2">Nome</th>
          <th className="text-left p-2">Empresa</th>
          <th className="text-left p-2">Email</th>
          <th className="text-left p-2">Score</th>
          <th className="text-left p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {leads.map(lead => (
          <tr
            key={lead.id}
            className="border-b last:border-0 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelectLead(lead)}
          >
            <td className="p-2">{lead.name}</td>
            <td className="p-2">{lead.company}</td>
            <td className="p-2">{lead.email}</td>
            <td className="p-2">{lead.score}</td>
            <td className="p-2 capitalize">{lead.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
