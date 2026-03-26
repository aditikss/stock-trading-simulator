import api from './api';

export const buyStock = async (data) => {
  return { success: true, message: "Bought successfully" };
};

export const sellStock = async (data) => {
  return { success: true, message: "Sold successfully" };
};

export const getTransactions = async () => {
  return [
    { id: 1, stock: 'AAPL', quantity: 10, price: 155.20, type: 'BUY', date: new Date().toISOString() },
    { id: 2, stock: 'TSLA', quantity: 5, price: 210.50, type: 'BUY', date: new Date().toISOString() },
    { id: 3, stock: 'MSFT', quantity: 2, price: 340.20, type: 'SELL', date: new Date().toISOString() }
  ];
};

export const getStockPrices = async () => {
  return [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 155.6, change: 1.2, changePercent: 0.78 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 340.2, change: -0.8, changePercent: -0.23 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 210.5, change: 4.5, changePercent: 2.18 },
    { symbol: 'AMZN', name: 'Amazon.com', price: 145.0, change: 0.5, changePercent: 0.35 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 135.2, change: 1.1, changePercent: 0.82 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 460.5, change: 12.5, changePercent: 2.79 }
  ];
};
