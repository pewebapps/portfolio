import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<p>Home</p>} />
            <Route path="/projects" element={<p>Projects</p>} />
            <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
