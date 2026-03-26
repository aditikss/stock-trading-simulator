import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function RiskMeter({ score, value, alerts = [] }) {
  let colorClass = 'text-success';
  let bgClass = 'bg-success';
  let Icon = ShieldCheck;
  
  if (score === 'Medium') {
    colorClass = 'text-warning';
    bgClass = 'bg-warning';
    Icon = AlertTriangle;
  } else if (score === 'High') {
    colorClass = 'text-danger';
    bgClass = 'bg-danger';
    Icon = ShieldAlert;
  }

  return (
    <div className="card risk-meter fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Portfolio Risk</h3>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div className={colorClass} style={{ 
          width: '120px', height: '120px', borderRadius: '50%', 
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', marginBottom: '1.5rem',
          border: '4px solid currentColor', position: 'relative'
        }}>
          <span style={{ fontSize: '2rem', fontWeight: 700 }}>{value}</span>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Score</span>
        </div>
        
        <div className={`risk-badge ${bgClass}`} style={{ 
          padding: '0.5rem 1rem', borderRadius: '20px', 
          display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 
        }}>
          <Icon size={18} />
          {score} Risk
        </div>
      </div>
      
      {alerts.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Recent Alerts</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {alerts.slice(0, 2).map(alert => (
              <div key={alert.id} style={{ 
                padding: '0.75rem', borderRadius: 'var(--radius-sm)', 
                background: 'rgba(0,0,0,0.2)', fontSize: '0.875rem',
                borderLeft: `3px solid var(--${alert.type})`
              }}>
                {alert.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
