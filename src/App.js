import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BasicFunctionsManagement from './components/BasicFunctionsManagement';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Php from './components/Php';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/php" element={<Php />} />
          <Route path="/basicfunctionsmanagement" element={<BasicFunctionsManagement />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any undefined routes to home */}
        </Routes>
      </Router>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);

export default App;
