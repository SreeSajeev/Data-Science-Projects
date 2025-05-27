
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import ChurnMetrics from '@/components/ChurnMetrics';
import FeatureImportance from '@/components/FeatureImportance';
import DataVisualization from '@/components/DataVisualization';
import ChurnTrend from '@/components/ChurnTrend';
import CustomerSegments from '@/components/CustomerSegments';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section with Back Button */}
      <section className="pt-24 pb-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-4 gap-1" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-2 animate-fade-in">
                Churn Analytics Dashboard
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in">
                Customer Churn <span className="text-blue-600">Overview</span>
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-gray-600 animate-fade-in">
            Monitor key metrics, identify trends, and gain insights to reduce customer churn
          </p>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <ChurnMetrics />
        </div>
      </section>
      
      {/* Main Dashboard Content */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ChurnTrend />
            <CustomerSegments />
          </div>
          
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

export default Dashboard;
