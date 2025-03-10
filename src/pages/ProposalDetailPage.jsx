import React, { useState } from "react";

const ProposalDetailPage = () => {
  const proposal = {
    id: 1,
    title: "Improve Community Park",
    description:
      "This proposal aims to renovate the local park by adding new playground equipment, planting trees, and creating a walking trail. The project will enhance the community's quality of life and provide a safe, green space for families.",
    category: "Community",
    deadline: "2023-12-31",
    votes: { yes: 80, no: 20, abstain: 10 },
    image: "https://source.unsplash.com/random/800x600?park",
  };

  const [selectedDelegates, setSelectedDelegates] = useState([]);

  const delegates = [
    {
      id: 1,
      name: "John Doe",
      bio: "Experienced community leader with a passion for sustainable development.",
      image: "https://source.unsplash.com/random/800x600?person",
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Technical expert specializing in blockchain and decentralized systems.",
      image: "https://source.unsplash.com/random/800x600?woman",
    },
    {
      id: 3,
      name: "Alice Johnson",
      bio: "Advocate for educational reform and lifelong learning initiatives.",
      image: "https://source.unsplash.com/random/800x600?lady",
    },
    {
      id: 4,
      name: "Michael Brown",
      bio: "Community organizer with a focus on urban development and public spaces.",
      image: "https://source.unsplash.com/random/800x600?man",
    },
  ];

  const handleVote = (vote) => {
    // Add logic to interact with the smart contract
    console.log(`Voted: ${vote}`);
  };

  const handleSelectDelegate = (delegateId) => {
    if (selectedDelegates.includes(delegateId)) {
      setSelectedDelegates(selectedDelegates.filter((id) => id !== delegateId));
    } else if (selectedDelegates.length < 5) {
      setSelectedDelegates([...selectedDelegates, delegateId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Proposal Image */}
        <img
          src={proposal.image}
          alt={proposal.title}
          className="w-full h-64 object-cover"
        />

        {/* Proposal Details */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {proposal.title}
          </h1>
          <p className="text-gray-600 mb-6">{proposal.description}</p>

          {/* Metadata Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-lg font-semibold text-gray-800">
                {proposal.category}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Deadline</p>
              <p className="text-lg font-semibold text-gray-800">
                {proposal.deadline}
              </p>
            </div>
          </div>

          {/* Voting Section */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Cast Your Vote</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                onClick={() => handleVote("yes")}
                className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                Yes ({proposal.votes.yes})
              </button>
              <button
                onClick={() => handleVote("no")}
                className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                No ({proposal.votes.no})
              </button>
              <button
                onClick={() => handleVote("abstain")}
                className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
              >
                Abstain ({proposal.votes.abstain})
              </button>
            </div>
          </div>

          {/* Delegate Selection Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Select Delegates
            </h2>
            <p className="text-gray-600 mb-6">
              Choose up to 5 delegates to validate the votes for this proposal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {delegates.map((delegate) => (
                <div
                  key={delegate.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    selectedDelegates.includes(delegate.id)
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => handleSelectDelegate(delegate.id)}
                >
                  {/* Delegate Image */}
                  <img
                    src={delegate.image}
                    alt={delegate.name}
                    className="w-full h-48 object-cover"
                  />

                  {/* Delegate Details */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {delegate.name}
                    </h2>
                    <p className="text-sm text-gray-600">{delegate.bio}</p>
                  </div>

                  {/* Selection Indicator */}
                  {selectedDelegates.includes(delegate.id) && (
                    <div className="p-2 bg-blue-500 text-white text-center">
                      Selected
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Selected Delegates Count */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                You have selected {selectedDelegates.length} out of 5 delegates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailPage;