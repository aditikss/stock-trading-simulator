import api from './api';

export const loginUser = async (credentials) => {
  console.log("Mocking login", credentials);
  return { id: 1, username: credentials.username || 'Trader_1', balance: 25000 };
};

export const registerUser = async (userData) => {
  return { success: true };
};
