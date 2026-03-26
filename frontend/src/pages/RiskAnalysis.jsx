import { useState, useEffect } from 'react';
import { getRiskAnalysis } from '../services/riskService';
import RiskMeter from '../components/RiskMeter';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];

export const RiskAnalysis = () => {
  const [riskData, setRiskData] = useState(null);

  useEffect(() => {
    getRiskAnalysis().then(res => setRiskData(res));
  }, []);

  if (!riskData) return <div className="p-8">Loading risk analysis...</div>;

  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Risk Intelligence</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <RiskMeter score={riskData.riskScore} value={riskData.riskScoreValue} alerts={riskData.alerts} />
        
        <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Sector Allocation</h3>
          <div style={{ flex: 1, width: '100%', minHeight: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData.allocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {riskData.allocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                  itemStyle={{ color: 'white' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>AI Predictions & Factors</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Portfolio Volatility</p>
            <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{(riskData.volatility * 100).toFixed(1)}%</div>
          </div>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Diversification Rating</p>
            <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--success)' }}>{riskData.diversification}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
