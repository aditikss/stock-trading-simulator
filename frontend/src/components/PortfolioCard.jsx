export default function PortfolioCard({ item }) {
  const currentValue = item.quantity * item.avgPrice;
  
  return (
    <div className="card portfolio-card fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem' }}>
      <div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>{item.stock}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{item.quantity} Shares</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>${currentValue.toFixed(2)}</div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>Avg: ${item.avgPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
