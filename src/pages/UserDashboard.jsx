import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProposalCard from "../components/ProposalCard";

const UserDashboard = () => {
  const [proposals, setProposals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  // Mock data for proposals (replace with blockchain data)
  useEffect(() => {
    const mockProposals = [
      {
        id: 1,
        title: "Improve Community Park",
        category: "Community",
        deadline: "2023-12-31",
        votes: 120,
        image: "https://source.unsplash.com/random/800x600?park",
      },
      {
        id: 2,
        title: "New Educational Program",
        category: "Educational",
        deadline: "2024-01-15",
        votes: 80,
        image: "https://source.unsplash.com/random/800x600?education",
      },
      {
        id: 3,
        title: "Upgrade Local Library",
        category: "Community",
        deadline: "2024-02-20",
        votes: 95,
        image: "https://source.unsplash.com/random/800x600?library",
      },
    ];
    setProposals(mockProposals);
  }, []);

  const filteredProposals = proposals.filter((proposal) => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || proposal.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Proposals Dashboard</h1>
          <Link
            to="/create-proposal"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create a New Proposal
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search proposals..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Community">Community</option>
            <option value="Technical">Technical</option>
            <option value="Educational">Educational</option>
          </select>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;