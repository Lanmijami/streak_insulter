import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
