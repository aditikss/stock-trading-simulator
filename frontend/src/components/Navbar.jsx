import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, PieChart, ShieldAlert, History, LogOut } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Don't show navbar on login/signup pages
  if (['/login', '/signup'].includes(location.pathname)) return null;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo-icon-wrapper">
          <TrendingUp className="brand-icon" size={24} />
        </div>
        <span className="brand-text">TradeSim<span className="accent">.AI</span></span>
      </div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${isActive('/')}`}><LayoutDashboard size={20} /> <span className="link-text">Dashboard</span></Link>
        <Link to="/trade" className={`nav-link ${isActive('/trade')}`}><TrendingUp size={20} /> <span className="link-text">Trade</span></Link>
        <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}><PieChart size={20} /> <span className="link-text">Portfolio</span></Link>
        <Link to="/risk-analysis" className={`nav-link ${isActive('/risk-analysis')}`}><ShieldAlert size={20} /> <span className="link-text">Risk AI</span></Link>
        <Link to="/transactions" className={`nav-link ${isActive('/transactions')}`}><History size={20} /> <span className="link-text">History</span></Link>
      </div>
      <div className="nav-actions">
        <Link to="/login" className="nav-logout"><LogOut size={20} /> <span className="link-text">Logout</span></Link>
      </div>
    </nav>
  );
}
