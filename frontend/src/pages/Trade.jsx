import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { getStockPrices } from '../services/tradeService';
import StockCard from '../components/StockCard';

export const Trade = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getStockPrices().then(res => setStocks(res));
  }, []);

  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(search.toLowerCase()) || 
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Trade Markets</h1>
        
        <div style={{ position: 'relative', width: '300px' }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={18} />
          <input 
            type="text" 
            className="input-field" 
            placeholder="Search by symbol or name..."
            style={{ paddingLeft: '2.5rem', marginBottom: 0 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredStocks.map(stock => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
        {filteredStocks.length === 0 && (
          <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No stocks found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
};
