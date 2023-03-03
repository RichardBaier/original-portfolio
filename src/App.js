import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume, AboutMe, Portfolio, Contact } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-row justify-center align-center min-100-vh">
        <Routes>
          <Route 
            path="/aboutme" 
            element={<AboutMe />}
          />
          <Route 
            path="/portfolio" 
            element={<Portfolio />}
          />
          <Route 
            path="/contact" 
            element={<Contact />}
          />
          <Route 
            path="/resume" 
            element={<Resume />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
