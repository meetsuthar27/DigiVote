import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
          DigiVote: Secure & Transparent Blockchain Voting
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Empowering elections with blockchain technology. Experience a secure,
          transparent, and decentralized voting system using **Delegated Proof
          of Stake (DPoS)**.
        </p>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
