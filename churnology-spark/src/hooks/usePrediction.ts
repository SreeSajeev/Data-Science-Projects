
import { useState } from 'react';
import { CustomerData, FeatureImportance, getRandomChurnPrediction } from '@/utils/mockData';
import { toast } from 'sonner';

interface PredictionResult {
  isLoading: boolean;
  churnProbability: number;
  isChurned: boolean;
  confidence: number;
  topFactors: FeatureImportance[];
  error: string | null;
}

export const usePrediction = () => {
  const [result, setResult] = useState<PredictionResult>({
    isLoading: false,
    churnProbability: 0,
    isChurned: false,
    confidence: 0,
    topFactors: [],
    error: null
  });

  const predictChurn = async (customerData: CustomerData) => {
    setResult(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      // Simulate API call to ML model
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an API call to your ML model
      const prediction = getRandomChurnPrediction();
      
      // Calculate confidence based on how far from 0.5 the probability is
      const confidence = Math.abs(prediction.churnProbability - 0.5) * 2;
      
      setResult({
        isLoading: false,
        churnProbability: prediction.churnProbability,
        isChurned: prediction.isChurned,
        confidence: confidence,
        topFactors: prediction.topFactors,
        error: null
      });
      
      toast(prediction.isChurned ? 'High churn risk detected' : 'Low churn risk detected', {
        description: `Churn probability: ${(prediction.churnProbability * 100).toFixed(1)}%`,
        duration: 3000
      });
      
    } catch (error) {
      console.error("Prediction error:", error);
      setResult(prev => ({
        ...prev,
        isLoading: false,
        error: "Failed to make prediction. Please try again."
      }));
      
      toast.error('Prediction failed', {
        description: 'There was an error processing your request',
      });
    }
  };

  return {
    ...result,
    predictChurn
  };
};
