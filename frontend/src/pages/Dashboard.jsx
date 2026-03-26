import { useState, useEffect } from 'react';
import { Wallet, TrendingUp, Briefcase } from 'lucide-react';
import { getWalletBalance, getPortfolio } from '../services/portfolioService';
import { getRiskAnalysis } from '../services/riskService';
import PortfolioCard from '../components/PortfolioCard';
import RiskMeter from '../components/RiskMeter';
import Chart from '../components/Chart';

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [portfolio, setPortfolio] = useState([]);
  const [risk, setRisk] = useState(null);

  useEffect(() => {
    getWalletBalance().then(res => setBalance(res.balance));
    getPortfolio().then(res => setPortfolio(res));
    getRiskAnalysis().then(res => setRisk(res));
  }, []);

  const totalInvestment = portfolio.reduce((acc, item) => acc + (item.quantity * item.avgPrice), 0);

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="logo-icon-wrapper"><Wallet className="brand-icon" size={24} /></div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>Wallet Balance</p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>${balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</h2>
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="logo-icon-wrapper" style={{ background: 'var(--success)' }}><Briefcase className="brand-icon" size={24} color="white" /></div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>Total Investment</p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>${totalInvestment.toLocaleString('en-US', {minimumFractionDigits: 2})}</h2>
          </div>
        </div>

        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="logo-icon-wrapper" style={{ background: 'var(--accent-secondary)' }}><TrendingUp className="brand-icon" size={24} color="white" /></div>
          <div>
            <p style={{ color: 'var(--text-secondary)' }}>Total Profit/Loss</p>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--success)' }}>+$1,245.50</h2>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <Chart title="Portfolio Performance" />
        {risk && <RiskMeter score={risk.riskScore} value={risk.riskScoreValue} alerts={risk.alerts} />}
      </div>
      
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Top Holdings</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {portfolio.slice(0, 3).map(item => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
