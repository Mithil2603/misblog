import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BasicFunctionsManagement from './components/BasicFunctionsManagement';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Php from './components/Php';
import DCN from './components/DCN';
import Linux from './components/Linux';
import LinuxCommands from './components/LinuxCommands';
import PhpImpQues from './components/PhpImpQues';
import MyFooter from './components/MyFooter';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/misblog">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/php" element={<Php />} />
          <Route path="/basicfunctionsmanagement" element={<BasicFunctionsManagement />} />
          <Route path="/dcn" element={<DCN />} />
          <Route path="/linux" element={<Linux />} />
          <Route path="/linux_commands" element={<LinuxCommands />} />
          <Route path="/phpquestions" element={<PhpImpQues />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <MyFooter></MyFooter>
      </Router>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);

export default App;
