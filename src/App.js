import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoadingScreen></LoadingScreen>} />
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/Homepage" exact element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
