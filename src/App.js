import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" exact element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
