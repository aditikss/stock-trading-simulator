import { useState, useEffect } from 'react';
import { getTransactions } from '../services/tradeService';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(res => setTransactions(res));
  }, []);

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Transaction History</h1>
      
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(255,255,255,0.05)' }}>
            <tr>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Asset</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Type</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Quantity</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Price</th>
              <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: 500, textAlign: 'right' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={tx.id} style={{ borderBottom: index < transactions.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <td style={{ padding: '1rem 1.5rem' }}>{new Date(tx.date).toLocaleDateString()}</td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{tx.stock}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '12px', 
                    fontSize: '0.75rem', 
                    fontWeight: 600,
                    background: tx.type === 'BUY' ? 'var(--success-bg)' : 'rgba(239, 68, 68, 0.1)',
                    color: tx.type === 'BUY' ? 'var(--success)' : 'var(--danger)'
                  }}>
                    {tx.type}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>{tx.quantity}</td>
                <td style={{ padding: '1rem 1.5rem' }}>${tx.price.toFixed(2)}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right', fontWeight: 600 }}>
                  ${(tx.quantity * tx.price).toLocaleString('en-US', {minimumFractionDigits: 2})}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
