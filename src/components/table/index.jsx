export default function Table({ leads, onSelectLead }) {
  if (leads.length === 0) {
    return (
      <div className="p-4 text-center text-green-500">No leads found.</div>
    );
  }

  return (
    <div className="overflow-x-auto w-full mb-8">
      <table className="min-w-[700px] w-full bg-white rounded shadow overflow-hidden font-sans">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="text-left p-3">Id</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Company</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Source</th>
            <th className="text-left p-3">Score</th>
            <th className="text-left p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-green-200 last:border-0 hover:bg-green-50 cursor-pointer transition"
              onClick={() => onSelectLead(lead)}
            >
              <td className="p-3">{lead.id}</td>
              <td className="p-3">{lead.name}</td>
              <td className="p-3">{lead.company}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.source}</td>
              <td className="p-3">{lead.score}</td>
              <td className="p-3 capitalize">{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
