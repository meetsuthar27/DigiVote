import React, { useState } from "react";

const DelegateSelection = () => {
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

  const handleSelectDelegate = (delegateId) => {
    if (selectedDelegates.includes(delegateId)) {
      setSelectedDelegates(selectedDelegates.filter((id) => id !== delegateId));
    } else if (selectedDelegates.length < 5) {
      setSelectedDelegates([...selectedDelegates, delegateId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Delegate Selection</h1>
        <p className="text-gray-600 mb-8">
          Select up to 5 delegates to represent your interests. Delegates will validate votes and ensure the integrity of the voting process.
        </p>

        {/* Delegate Cards Grid */}
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
  );
};

export default DelegateSelection;