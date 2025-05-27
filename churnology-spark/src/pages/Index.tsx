
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CustomerData } from '@/utils/mockData';
import { usePrediction } from '@/hooks/usePrediction';
import Header from '@/components/Header';
import PredictionForm from '@/components/PredictionForm';
import PredictionResult from '@/components/PredictionResult';
import FeatureImportance from '@/components/FeatureImportance';
import ChurnMetrics from '@/components/ChurnMetrics';
import DataVisualization from '@/components/DataVisualization';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Index = () => {
  const prediction = usePrediction();
  const navigate = useNavigate();
  
  const handleSubmit = (data: CustomerData) => {
    prediction.predictChurn(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4 animate-fade-in">
            Customer Churn Analytics Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Predict <span className="text-blue-600">Customer Churn</span> with AI
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Advanced analytics and machine learning to identify at-risk customers and understand churn factors
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/dashboard" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
            <Link to="/documentation" className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-6 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ChurnMetrics />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PredictionForm 
              onSubmit={handleSubmit} 
              isLoading={prediction.isLoading} 
            />
            
            <PredictionResult 
              churnProbability={prediction.churnProbability}
              isChurned={prediction.isChurned}
              confidence={prediction.confidence}
              topFactors={prediction.topFactors}
              isLoading={prediction.isLoading}
            />
          </div>
        </div>
      </section>
      
      {/* Analysis Section */}
      <section className="py-12 px-4 md:px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureImportance />
            <DataVisualization />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p>© 2023 Churnology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
