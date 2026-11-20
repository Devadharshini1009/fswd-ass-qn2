import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">STUDENT DEVELOPMENT</p>
      <h1>Placement Skill Monitoring Management System</h1>
      <p>Manage student technical skills, aptitude scores, communication skills and placement readiness through the React interface.</p>
      <Link className="primary-link" to="/students">View Student Skill Records</Link>
      <div className="info-strip">
        <div><strong>Axios</strong><span>React–Express communication</span></div>
        <div><strong>CRUD</strong><span>GET · POST · PUT · DELETE</span></div>
        <div><strong>React</strong><span>Student record display</span></div>
      </div>
    </section>
  );
}
