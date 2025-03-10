import React from "react";
import { Link } from "react-router-dom";

const ProposalCard = ({ proposal }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={proposal.image}
        alt={proposal.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{proposal.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Category:</span> {proposal.category}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Deadline:</span> {proposal.deadline}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Votes:</span> {proposal.votes}
          </p>
          <Link
            to={`/proposal/${proposal.id}`}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;