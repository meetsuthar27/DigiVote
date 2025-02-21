import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-red-400">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
