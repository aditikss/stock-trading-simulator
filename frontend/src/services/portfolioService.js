import api from './api';

export const getPortfolio = async () => {
  return [
    { id: 1, stock: 'AAPL', quantity: 15, avgPrice: 145 },
    { id: 2, stock: 'MSFT', quantity: 10, avgPrice: 330 },
    { id: 3, stock: 'NVDA', quantity: 5, avgPrice: 400 },
    { id: 4, stock: 'TSLA', quantity: 8, avgPrice: 205 }
  ];
};

export const getWalletBalance = async () => {
  return { balance: 25450.50 };
};
