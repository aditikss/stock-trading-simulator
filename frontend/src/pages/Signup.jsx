import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { registerUser } from '../services/authService';

export const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirm) {
      alert("Passwords don't match");
      return;
    }
    setLoading(true);
    await registerUser(formData);
    setTimeout(() => {
      navigate('/login');
    }, 600);
  };

  return (
    <div className="fade-in" style={{ 
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'absolute', top: 0, left: 0, right: 0, background: 'var(--bg-primary)', zIndex: 1000
    }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '420px', padding: '2.5rem', margin: '1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="logo-icon-wrapper" style={{ margin: '0 auto 1rem' }}>
            <TrendingUp size={24} className="brand-icon" />
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Create Account</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Join TradeSim.AI today</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Username</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Choose a username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required 
            />
          </div>
          
          <div className="input-group">
            <label className="input-label">Password</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="Create your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required 
            />
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input 
              type="password" 
              className="input-field" 
              placeholder="Confirm your password"
              value={formData.confirm}
              onChange={(e) => setFormData({...formData, confirm: e.target.value})}
              required 
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={loading}>
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Already have an account? <Link to="/login" className="text-accent-primary" style={{ fontWeight: 600 }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
};
