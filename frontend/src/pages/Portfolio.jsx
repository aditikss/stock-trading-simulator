import { useState, useEffect } from 'react';
import { getPortfolio } from '../services/portfolioService';

export const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio().then(res => setPortfolio(res));
  }, []);

  const totalValue = portfolio.reduce((acc, item) => acc + (item.quantity * item.avgPrice), 0);

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Your Portfolio</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your current holdings</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Total Value</p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
            ${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2})}
          </h2>
        </div>
      </div>
      
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(255,255,255,0.05)' }}>
            <tr>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Asset</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Quantity</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Avg Price</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500, textAlign: 'right' }}>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item, index) => (
              <tr key={item.id} style={{ borderBottom: index < portfolio.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{item.stock}</td>
                <td style={{ padding: '1rem 1.5rem' }}>{item.quantity}</td>
                <td style={{ padding: '1rem 1.5rem' }}>${item.avgPrice.toFixed(2)}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right', fontWeight: 600 }}>
                  ${(item.quantity * item.avgPrice).toLocaleString('en-US', {minimumFractionDigits: 2})}
                </td>
              </tr>
            ))}
            {portfolio.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  Your portfolio is empty. Go to Trade to buy some stocks!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
