
export interface CustomerData {
  id: number;
  gender: string;
  seniorCitizen: boolean;
  partner: boolean;
  dependents: boolean;
  tenure: number;
  phoneService: boolean;
  multipleLines: string;
  internetService: string;
  onlineSecurity: string;
  onlineBackup: string;
  deviceProtection: string;
  techSupport: string;
  streamingTV: string;
  streamingMovies: string;
  contract: string;
  paperlessBilling: boolean;
  paymentMethod: string;
  monthlyCharges: number;
  totalCharges: number;
  churnProbability?: number;
  isChurned?: boolean;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  direction: 'positive' | 'negative';
}

export interface ChurnMetric {
  name: string;
  value: number;
  change: number;
  format: 'percentage' | 'number' | 'currency';
}

export const mockCustomers: CustomerData[] = [
  {
    id: 1,
    gender: "Female",
    seniorCitizen: false,
    partner: true,
    dependents: false,
    tenure: 72,
    phoneService: true,
    multipleLines: "Yes",
    internetService: "Fiber optic",
    onlineSecurity: "No",
    onlineBackup: "Yes",
    deviceProtection: "Yes",
    techSupport: "No",
    streamingTV: "Yes",
    streamingMovies: "Yes",
    contract: "Two year",
    paperlessBilling: true,
    paymentMethod: "Credit card (automatic)",
    monthlyCharges: 84.8,
    totalCharges: 6100.3,
    churnProbability: 0.12,
    isChurned: false
  },
  {
    id: 2,
    gender: "Male",
    seniorCitizen: true,
    partner: false,
    dependents: false,
    tenure: 5,
    phoneService: true,
    multipleLines: "No",
    internetService: "DSL",
    onlineSecurity: "Yes",
    onlineBackup: "No",
    deviceProtection: "No",
    techSupport: "Yes",
    streamingTV: "No",
    streamingMovies: "No",
    contract: "Month-to-month",
    paperlessBilling: true,
    paymentMethod: "Electronic check",
    monthlyCharges: 53.5,
    totalCharges: 269.9,
    churnProbability: 0.72,
    isChurned: true
  },
  {
    id: 3,
    gender: "Male",
    seniorCitizen: false,
    partner: true,
    dependents: true,
    tenure: 23,
    phoneService: true,
    multipleLines: "Yes",
    internetService: "Fiber optic",
    onlineSecurity: "No",
    onlineBackup: "No",
    deviceProtection: "Yes",
    techSupport: "No",
    streamingTV: "Yes",
    streamingMovies: "Yes",
    contract: "Month-to-month",
    paperlessBilling: true,
    paymentMethod: "Electronic check",
    monthlyCharges: 95.7,
    totalCharges: 2360.95,
    churnProbability: 0.55,
    isChurned: false
  },
  {
    id: 4,
    gender: "Female",
    seniorCitizen: false,
    partner: false,
    dependents: false,
    tenure: 38,
    phoneService: true,
    multipleLines: "No",
    internetService: "DSL",
    onlineSecurity: "Yes",
    onlineBackup: "Yes",
    deviceProtection: "Yes",
    techSupport: "Yes",
    streamingTV: "No",
    streamingMovies: "No",
    contract: "One year",
    paperlessBilling: false,
    paymentMethod: "Bank transfer (automatic)",
    monthlyCharges: 59.95,
    totalCharges: 2256.35,
    churnProbability: 0.28,
    isChurned: false
  },
  {
    id: 5,
    gender: "Female",
    seniorCitizen: true,
    partner: true,
    dependents: false,
    tenure: 10,
    phoneService: true,
    multipleLines: "Yes",
    internetService: "Fiber optic",
    onlineSecurity: "No",
    onlineBackup: "No",
    deviceProtection: "No",
    techSupport: "No",
    streamingTV: "No",
    streamingMovies: "No",
    contract: "Month-to-month",
    paperlessBilling: true,
    paymentMethod: "Electronic check",
    monthlyCharges: 75.15,
    totalCharges: 761.25,
    churnProbability: 0.82,
    isChurned: true
  }
];

export const mockFeatureImportance: FeatureImportance[] = [
  { feature: "Contract Type", importance: 0.35, direction: "negative" },
  { feature: "Tenure", importance: 0.25, direction: "negative" },
  { feature: "Monthly Charges", importance: 0.15, direction: "positive" },
  { feature: "Internet Service", importance: 0.12, direction: "positive" },
  { feature: "Online Security", importance: 0.08, direction: "negative" },
  { feature: "Payment Method", importance: 0.07, direction: "positive" },
  { feature: "Tech Support", importance: 0.06, direction: "negative" },
  { feature: "Paperless Billing", importance: 0.04, direction: "positive" }
];

export const mockChurnMetrics: ChurnMetric[] = [
  { name: "Current Churn Rate", value: 0.267, change: 0.023, format: "percentage" },
  { name: "Predicted Churn Next Month", value: 0.289, change: 0.022, format: "percentage" },
  { name: "Average Tenure (Churned)", value: 11.2, change: -0.8, format: "number" },
  { name: "Revenue at Risk", value: 125350, change: 15420, format: "currency" }
];

export const mockMonthlyChurnRate = [
  { month: 'Jan', churnRate: 0.22 },
  { month: 'Feb', churnRate: 0.23 },
  { month: 'Mar', churnRate: 0.21 },
  { month: 'Apr', churnRate: 0.24 },
  { month: 'May', churnRate: 0.25 },
  { month: 'Jun', churnRate: 0.23 },
  { month: 'Jul', churnRate: 0.27 },
  { month: 'Aug', churnRate: 0.26 },
  { month: 'Sep', churnRate: 0.28 },
  { month: 'Oct', churnRate: 0.27 },
  { month: 'Nov', churnRate: 0.29 },
  { month: 'Dec', churnRate: 0.30 }
];

export const mockSegmentChurn = [
  { segment: "New Customers (<6mo)", churnRate: 0.38 },
  { segment: "Mid-tenure (6-24mo)", churnRate: 0.25 },
  { segment: "Established (>24mo)", churnRate: 0.12 },
  { segment: "High Value", churnRate: 0.18 },
  { segment: "Low Value", churnRate: 0.32 }
];

export const defaultCustomerData: CustomerData = {
  id: 0,
  gender: "Male",
  seniorCitizen: false,
  partner: false,
  dependents: false,
  tenure: 12,
  phoneService: true,
  multipleLines: "No",
  internetService: "Fiber optic",
  onlineSecurity: "No",
  onlineBackup: "No",
  deviceProtection: "No",
  techSupport: "No",
  streamingTV: "No",
  streamingMovies: "No",
  contract: "Month-to-month",
  paperlessBilling: true,
  paymentMethod: "Electronic check",
  monthlyCharges: 70,
  totalCharges: 840
};

export const getRandomChurnPrediction = () => {
  const probability = Math.random();
  return {
    churnProbability: probability,
    isChurned: probability > 0.5,
    topFactors: mockFeatureImportance.slice(0, 3)
  };
};
