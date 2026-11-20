import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import StudentRecords from './pages/StudentRecords.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Placement Skill Monitor</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/students">Student Skill Records</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentRecords />} />
        </Routes>
      </main>
      <footer>Placement Skill Monitoring Management System</footer>
    </div>
  );
}
