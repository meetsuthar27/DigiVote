import React from "react";

const ProposalHistory = () => {
  const createdProposals = [
    {
      id: 1,
      title: "Improve Community Park",
      status: "Passed",
      description: "Proposal to renovate the local park with new facilities.",
      image: "https://source.unsplash.com/random/800x600?park",
    },
  ];
  const votedProposals = [
    {
      id: 2,
      title: "New Educational Program",
      vote: "Yes",
      description: "Proposal to introduce a new educational program for students.",
      image: "https://source.unsplash.com/random/800x600?education",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Proposal History</h1>

        {/* Created Proposals Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Created Proposals</h2>
        <div className="space-y-6">
          {createdProposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={proposal.image}
                alt={proposal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {proposal.title}
                </h3>
                <p className="text-gray-600 mb-4">{proposal.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={`${
                      proposal.status === "Passed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {proposal.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Voted Proposals Section */}
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          Voted Proposals
        </h2>
        <div className="space-y-6">
          {votedProposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={proposal.image}
                alt={proposal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {proposal.title}
                </h3>
                <p className="text-gray-600 mb-4">{proposal.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Your Vote:</span>{" "}
                  <span
                    className={`${
                      proposal.vote === "Yes"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {proposal.vote}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposalHistory;