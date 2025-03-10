import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ fullName: "", email: "", password: "", role: "regular" });
  const [loading, setLoading] = useState(false);
  const [ethereum, setEthereum] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (window.ethereum) {
      setEthereum(window.ethereum);
    }
  }, []);

  // Handle standard login
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", loginData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role); // Save role in local storage
      alert(`Login successful! You are a ${response.data.role}`);

      // Redirect based on role
      if (response.data.role === "regular") {
        navigate("/userdash"); // Redirect regular users to UserDashboard
      } else if (response.data.role === "gov") {
        navigate("/govdash"); // Redirect government users to Government Dashboard
      }
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  // Handle user registration
  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/auth/register", signupData);
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  // Handle MetaMask login
  const handleMetaMaskLogin = async () => {
    if (!ethereum) {
      alert("MetaMask is not installed");
      return;
    }
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setWalletAddress(accounts[0]);
      setIsMetaMaskConnected(true);

      const response = await axios.post("http://localhost:5000/api/auth/metamask", { wallet: accounts[0] });
      localStorage.setItem("token", response.data.token);
      alert("Logged in with MetaMask!");

      // Redirect based on role
      if (response.data.role === "regular") {
        navigate("/userdash"); // Redirect regular users to UserDashboard
      } else if (response.data.role === "gov") {
        navigate("/govdash"); // Redirect government users to Government Dashboard
      }
    } catch (error) {
      console.error("MetaMask connection failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      {/* Login Form */}
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            required
            value={loginData.email}
            onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            required
            value={loginData.password}
            onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
          />
          <button type="submit" disabled={loading} className="w-full p-2 bg-blue-600 rounded">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button onClick={handleMetaMaskLogin} className="w-full mt-4 p-2 bg-yellow-600 rounded">
          {isMetaMaskConnected ? `Connected: ${walletAddress}` : "Login with MetaMask"}
        </button>
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            required
            value={signupData.fullName}
            onChange={(e) => setSignupData((prev) => ({ ...prev, fullName: e.target.value }))}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            required
            value={signupData.email}
            onChange={(e) => setSignupData((prev) => ({ ...prev, email: e.target.value }))}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            required
            value={signupData.password}
            onChange={(e) => setSignupData((prev) => ({ ...prev, password: e.target.value }))}
          />

          {/* Role Selection */}
          <select
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            value={signupData.role}
            onChange={(e) => setSignupData((prev) => ({ ...prev, role: e.target.value }))}
          >
            <option value="regular">Regular User</option>
            <option value="gov">Government User</option>
          </select>

          <button type="submit" disabled={loading} className="w-full p-2 bg-green-600 rounded">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;