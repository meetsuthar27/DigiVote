import React from "react";
import PixelCard from "../components/PixelCard";
import CircularText from "../components/CircularText";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-serif text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <CircularText
        text="BLOCKCHAIN BASED VOTING SYSTEM * "
        onHover="speedUp"
        spinDuration={20}
        className="absolute top-[20%] font-light p-5 right-[18%] z-10 shadow-lg bg-gray-950 jetbrains"
      />
      <PixelCard
        variant="pink"
        className="w-[900px] smooth-corners-md rounded-[10em] border-teal-800"
        colors="oklch(0.446 0.03 256.802), oklch(0.386 0.063 188.416),oklch(0.6 0.118 184.704)"
      >
        <div className="text-center absolute p-20 max-w-4xl">
          <h1 className="text-4xl  shadow-md jetbrains tracking-tighter text-bold uppercase md:text-6xl text-teal-600 mb-6">
            Welcome to DigiVote
          </h1>
          <p className="text-2xl nunito text-gray-300 mb-8">
            Empowering elections with blockchain technology. Experience a
            secure, transparent, and decentralized voting system.
          </p>
          <Link to="/home">
            <button
              to="/home"
              className="px-6 py-3 bg-teal-950 cursor-pointer jetbrains hover:bg-teal-600 border-[1px] border-teal-800 hover:border-teal-500 text-teal-600 hover:text-gray-950 rounded-xl font-semibold shadow-md transition-all duration-300 ease-in-out transform"
            >
              GET STARTED
            </button>
          </Link>
        </div>
      </PixelCard>
    </div>
  );
};

export default HomePage;
