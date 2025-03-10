import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DotPattern } from "../Components/DotPattern";
import viteLogo from "/vite.svg"; // Default Vite logo

const teamMembers = ["Jay Raval", "Meet Suthar", "Meet Patel", "Jinil Savaj"];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center overflow-hidden relative">
      <DotPattern className="absolute inset-0 w-full h-full opacity-40" glow />

      {/* Navbar */}
      <header className="w-full py-6 flex justify-between items-center px-12 bg-black/20 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
        <motion.img
          src={viteLogo}
          alt="Logo"
          className="h-10 w-10 animate-spin-slow"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <nav className="flex gap-6">
          {["Proposals", "Elections", "Login"].map((item, i) => (
            <motion.div key={i} custom={i} initial="hidden" animate="visible" variants={textVariants}>
              <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-400">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mt-32 px-6"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          The Future of Online Voting
        </h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          DigiVote leverages blockchain to create secure, transparent, and cost-efficient elections for a new era of governance.
        </motion.p>
      </motion.section>

      {/* Features */}
      <motion.section className="mt-24 px-12 text-center" initial="hidden" animate="visible" variants={textVariants}>
        <h2 className="text-4xl font-semibold text-blue-400">Why Choose DigiVote?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {["Tamper-Proof Security", "Transparent Elections", "Cost-Efficient"].map((feature, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition" 
              whileHover={{ scale: 1.05 }}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <h3 className="text-xl font-bold text-green-400">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="mt-24 text-center" initial="hidden" animate="visible" variants={textVariants}>
        <h2 className="text-4xl font-semibold text-green-400">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {member}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="mt-24 text-center px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
        <h2 className="text-4xl font-semibold text-blue-400">Join DigiVote Today</h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">
          Take part in a revolutionary online voting system and experience secure digital democracy firsthand.
        </p>
        <Link to="/register" className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl text-lg transition">
          Sign Up Now
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="mt-24 py-6 bg-black/30 w-full text-center text-gray-400">
        <p>&copy; 2025 DigiVote. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
