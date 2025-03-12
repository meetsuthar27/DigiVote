import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import CreateProposal from "./pages/CreateProposal";
import ProposalDetailPage from "./pages/ProposalDetailPage";
import DelegateSelection from "./pages/DelegateSelection";
import ProposalHistory from "./pages/ProposalHistory";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginPageTemp from "./pages/LoginPageTemp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logintemp" element={<LoginPageTemp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userdash" element={<UserDashboard />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
        <Route path="/proposal/:id" element={<ProposalDetailPage />} />
        <Route path="/delegates" element={<DelegateSelection />} />
        <Route path="/history" element={<ProposalHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
