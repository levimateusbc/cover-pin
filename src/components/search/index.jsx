import React, { useState } from 'react';

export default function SearchFilterSort({ onSearch, onFilter, onSort, onCreateNewLead }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
    onFilter(e.target.value);
  };

  const handleSort = () => {
    onSort();
  };

  return (
    <div className="flex items-center gap-4 mb-6 font-sans">
      <input
        type="text"
        placeholder="Search by name or company"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-green-300 rounded px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <select
        value={statusFilter}
        onChange={handleFilterChange}
        className="border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="">All statuses</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
        <option value="closed">Closed</option>
      </select>
      <button
        onClick={handleSort}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
      >
        Sort by Score ↓
      </button>
      <button
        onClick={onCreateNewLead}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition whitespace-nowrap"
      >
        Create New Lead
      </button>
    </div>
  );
}
