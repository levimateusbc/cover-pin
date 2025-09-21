import React, { useState } from "react";
import Button from "../button";

export default function SearchFilterSort({
  onSearch,
  onFilter,
  onSort,
  onCreateNewLead,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

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
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6 font-sans w-full">
      <input
        type="text"
        placeholder="Search by name or company"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-green-300 rounded px-4 py-2 w-full md:w-auto flex-1 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <select
        value={statusFilter}
        onChange={handleFilterChange}
        className="border border-green-300 rounded px-4 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="">All statuses</option>
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
        <option value="closed">Closed</option>
      </select>

      <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        <Button
          label="Sort by Score ↓"
          onClick={handleSort}
          className="w-full sm:w-auto"
        />
        <Button
          label="+ Create New Lead"
          onClick={onCreateNewLead}
          className="w-full sm:w-auto"
        />
      </div>
    </div>
  );
}
