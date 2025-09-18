import React, { useState } from 'react';

export default function SearchFilterSort({ onSearch, onFilter, onSort }) {
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
    onSort(); // sort por score desc
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Buscar por nome ou empresa"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded px-3 py-1 flex-1"
      />
      <select
        value={statusFilter}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded px-3 py-1"
      >
        <option value="">Todos os status</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
        <option value="closed">Closed</option>
      </select>
      <button
        onClick={handleSort}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        Sort by Score ↓
      </button>
    </div>
  );
}
