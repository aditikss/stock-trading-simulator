import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StockCard({ stock }) {
  const isPositive = stock.change >= 0;
  
  return (
    <div className="card stock-card fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{stock.symbol}</h3>
        <div className={`stock-change ${isPositive ? 'text-success' : 'text-danger'}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {isPositive ? '+' : ''}{stock.changePercent}%
        </div>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>{stock.name}</p>
      <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>
        ${stock.price.toFixed(2)}
      </div>
      <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: 'var(--glass-border)', display: 'flex', justifyContent: 'space-between' }}>
        <button className="btn btn-primary" style={{ flex: 1, marginRight: '0.5rem', padding: '0.5rem' }}>Buy</button>
        <button className="btn btn-outline" style={{ flex: 1, marginLeft: '0.5rem', padding: '0.5rem' }}>Sell</button>
      </div>
    </div>
  );
}
