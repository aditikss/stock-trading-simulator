import api from './api';

export const getRiskAnalysis = async () => {
  return {
    riskScore: "Medium",
    riskScoreValue: 68, // out of 100
    volatility: 0.45,
    diversification: "Good",
    alerts: [
      { id: 1, message: "Over-investment in Tech sector detected.", type: "warning" },
      { id: 2, message: "TSLA shows high volatility today.", type: "danger" },
      { id: 3, message: "Portfolio beta is currently aligned with market averages.", type: "success" }
    ],
    allocation: [
      { name: 'Technology', value: 65 },
      { name: 'Automotive', value: 20 },
      { name: 'Healthcare', value: 10 },
      { name: 'Consumer', value: 5 }
    ]
  };
};
