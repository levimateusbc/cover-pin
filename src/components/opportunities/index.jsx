import React from 'react';

export default function OpportunitiesTable({ opportunities }) {
  if (opportunities.length === 0) {
    return <div className="p-4 text-center text-gray-500">Nenhuma oportunidade ainda.</div>;
  }

  return (
    <table className="w-full bg-white rounded shadow overflow-hidden mt-8">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="text-left p-2">ID</th>
          <th className="text-left p-2">Nome</th>
          <th className="text-left p-2">Stage</th>
          <th className="text-left p-2">Amount</th>
          <th className="text-left p-2">Account</th>
        </tr>
      </thead>
      <tbody>
        {opportunities.map(op => (
          <tr key={op.id} className="border-b last:border-0">
            <td className="p-2">{op.id}</td>
            <td className="p-2">{op.name}</td>
            <td className="p-2">{op.stage}</td>
            <td className="p-2">{op.amount ?? '-'}</td>
            <td className="p-2">{op.accountName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
