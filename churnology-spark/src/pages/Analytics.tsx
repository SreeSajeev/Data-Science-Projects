
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, BarChart4, LineChart, PieChart } from "lucide-react";
import { mockMonthlyChurnRate, mockSegmentChurn } from '@/utils/mockData';
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  ZAxis,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";

const Analytics = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("advanced");
  
  // Advanced analytics data
  const advancedAnalyticsData = [
    { month: 'Jan', newCustomers: 120, churnedCustomers: 45, retentionRate: 0.86 },
    { month: 'Feb', newCustomers: 132, churnedCustomers: 48, retentionRate: 0.85 },
    { month: 'Mar', newCustomers: 141, churnedCustomers: 52, retentionRate: 0.83 },
    { month: 'Apr', newCustomers: 154, churnedCustomers: 49, retentionRate: 0.84 },
    { month: 'May', newCustomers: 162, churnedCustomers: 55, retentionRate: 0.82 },
    { month: 'Jun', newCustomers: 178, churnedCustomers: 62, retentionRate: 0.80 },
  ];
  
  // Retention by customer lifecycle stage
  const lifecycleData = [
    { stage: 'Onboarding', retentionRate: 0.92 },
    { stage: '1-3 months', retentionRate: 0.85 },
    { stage: '4-6 months', retentionRate: 0.78 },
    { stage: '7-12 months', retentionRate: 0.72 },
    { stage: '1-2 years', retentionRate: 0.68 },
    { stage: '2+ years', retentionRate: 0.76 },
  ];
  
  // Customer health score distribution
  const healthScoreData = [
    { name: 'Healthy (80-100)', value: 35 },
    { name: 'Good (60-79)', value: 30 },
    { name: 'At Risk (40-59)', value: 20 },
    { name: 'Poor (20-39)', value: 10 },
    { name: 'Critical (0-19)', value: 5 },
  ];
  
  // Churn correlation data
  const correlationData = [
    { feature: 'Monthly Charges', correlation: 0.65, importance: 75, group: 'Pricing' },
    { feature: 'Contract Length', correlation: -0.58, importance: 68, group: 'Contract' },
    { feature: 'Support Tickets', correlation: 0.52, importance: 64, group: 'Service' },
    { feature: 'Downtime', correlation: 0.48, importance: 60, group: 'Service' },
    { feature: 'Age', correlation: -0.32, importance: 40, group: 'Demographics' },
    { feature: 'Location', correlation: 0.28, importance: 35, group: 'Demographics' },
    { feature: 'Devices', correlation: 0.22, importance: 30, group: 'Usage' },
  ];
  
  const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8',
    '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'
  ];

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
                Advanced Analytics
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in">
                Customer Retention <span className="text-blue-600">Insights</span>
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-gray-600 animate-fade-in">
            Deeper analysis of customer behavior patterns, churn predictors, and retention strategies.
          </p>
        </div>
      </section>
      
      {/* Analytics Tabs */}
      <section className="py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs 
            defaultValue="advanced" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <LineChart className="w-4 h-4" />
                <span>Advanced Metrics</span>
              </TabsTrigger>
              <TabsTrigger value="cohort" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Cohort Analysis</span>
              </TabsTrigger>
              <TabsTrigger value="correlation" className="flex items-center gap-2">
                <BarChart4 className="w-4 h-4" />
                <span>Correlation Analysis</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Advanced Metrics Tab */}
            <TabsContent value="advanced" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="w-full glass-card animate-fade-in">
                  <CardHeader className="pb-2">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                      Customer Acquisition vs Churn
                    </div>
                    <CardTitle>New vs Churned Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={advancedAnalyticsData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" orientation="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip />
                          <Legend />
                          <Bar yAxisId="left" dataKey="newCustomers" name="New Customers" fill="#4ade80" radius={[4, 4, 0, 0]} />
                          <Bar yAxisId="right" dataKey="churnedCustomers" name="Churned Customers" fill="#f87171" radius={[4, 4, 0, 0]} />
                          <Line yAxisId="right" type="monotone" dataKey="retentionRate" name="Retention Rate" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="w-full glass-card animate-fade-in">
                  <CardHeader className="pb-2">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                      Customer Lifecycle
                    </div>
                    <CardTitle>Retention by Customer Lifecycle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={lifecycleData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="stage" />
                          <YAxis 
                            domain={[0.5, 1]} 
                            tickCount={6} 
                            tickFormatter={(value) => `${Math.round(value * 100)}%`}
                          />
                          <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, "Retention Rate"]} />
                          <Bar dataKey="retentionRate" name="Retention Rate" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="w-full glass-card animate-fade-in">
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                    Health Scores
                  </div>
                  <CardTitle>Customer Health Score Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={healthScoreData}
                          cx="50%"
                          cy="50%"
                          outerRadius={150}
                          innerRadius={70}
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={true}
                        >
                          {healthScoreData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, "Distribution"]} />
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Cohort Analysis Tab */}
            <TabsContent value="cohort" className="space-y-8">
              <Card className="w-full glass-card animate-fade-in">
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                    Cohort Retention
                  </div>
                  <CardTitle className="flex justify-between items-center">
                    <span>Customer Retention by Signup Month</span>
                  </CardTitle>
                  <CardDescription>
                    Percentage of customers retained over time, grouped by their cohort (signup month)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border p-2 bg-gray-50">Cohort</th>
                          <th className="border p-2 bg-gray-50">Month 0</th>
                          <th className="border p-2 bg-gray-50">Month 1</th>
                          <th className="border p-2 bg-gray-50">Month 2</th>
                          <th className="border p-2 bg-gray-50">Month 3</th>
                          <th className="border p-2 bg-gray-50">Month 4</th>
                          <th className="border p-2 bg-gray-50">Month 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2 font-medium">Jan 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">92%</td>
                          <td className="border p-2 bg-blue-300">85%</td>
                          <td className="border p-2 bg-blue-200">78%</td>
                          <td className="border p-2 bg-blue-100">72%</td>
                          <td className="border p-2 bg-blue-50">68%</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Feb 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">94%</td>
                          <td className="border p-2 bg-blue-300">87%</td>
                          <td className="border p-2 bg-blue-200">80%</td>
                          <td className="border p-2 bg-blue-100">75%</td>
                          <td className="border p-2 bg-blue-50">-</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Mar 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">91%</td>
                          <td className="border p-2 bg-blue-300">84%</td>
                          <td className="border p-2 bg-blue-200">79%</td>
                          <td className="border p-2 bg-blue-100">-</td>
                          <td className="border p-2 bg-blue-50">-</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Apr 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">93%</td>
                          <td className="border p-2 bg-blue-300">86%</td>
                          <td className="border p-2 bg-blue-200">-</td>
                          <td className="border p-2 bg-blue-100">-</td>
                          <td className="border p-2 bg-blue-50">-</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">May 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">95%</td>
                          <td className="border p-2 bg-blue-300">-</td>
                          <td className="border p-2 bg-blue-200">-</td>
                          <td className="border p-2 bg-blue-100">-</td>
                          <td className="border p-2 bg-blue-50">-</td>
                        </tr>
                        <tr>
                          <td className="border p-2 font-medium">Jun 2023</td>
                          <td className="border p-2 bg-blue-500 text-white">100%</td>
                          <td className="border p-2 bg-blue-400 text-white">-</td>
                          <td className="border p-2 bg-blue-300">-</td>
                          <td className="border p-2 bg-blue-200">-</td>
                          <td className="border p-2 bg-blue-100">-</td>
                          <td className="border p-2 bg-blue-50">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="w-full glass-card animate-fade-in">
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                    Segmentation
                  </div>
                  <CardTitle>Cohort Performance by Segment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Premium Segment</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                      <p className="text-sm text-gray-500">3-month retention rate</p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Month 1:</span>
                          <span className="font-medium">96%</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>Month 2:</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 3:</span>
                          <span className="font-medium">87%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Standard Segment</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">76%</div>
                      <p className="text-sm text-gray-500">3-month retention rate</p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Month 1:</span>
                          <span className="font-medium">90%</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>Month 2:</span>
                          <span className="font-medium">82%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 3:</span>
                          <span className="font-medium">76%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Segment</h3>
                      <div className="text-3xl font-bold text-blue-600 mb-2">62%</div>
                      <p className="text-sm text-gray-500">3-month retention rate</p>
                      <div className="mt-4 text-sm">
                        <div className="flex justify-between mb-1">
                          <span>Month 1:</span>
                          <span className="font-medium">82%</span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>Month 2:</span>
                          <span className="font-medium">70%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Month 3:</span>
                          <span className="font-medium">62%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Correlation Analysis Tab */}
            <TabsContent value="correlation" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="w-full glass-card animate-fade-in">
                  <CardHeader className="pb-2">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                      Feature Correlation
                    </div>
                    <CardTitle>Churn Correlation by Feature</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart
                          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            type="number" 
                            dataKey="correlation" 
                            name="Correlation" 
                            domain={[-1, 1]} 
                            label={{ value: "Correlation with Churn", position: "bottom" }} 
                          />
                          <YAxis 
                            type="number" 
                            dataKey="importance" 
                            name="Importance" 
                            label={{ value: "Feature Importance", angle: -90, position: "insideLeft" }} 
                          />
                          <ZAxis 
                            type="category" 
                            dataKey="feature" 
                            name="Feature" 
                            range={[50, 400]} 
                          />
                          <Tooltip 
                            cursor={{ strokeDasharray: '3 3' }} 
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
                                    <p className="font-medium">{data.feature}</p>
                                    <p className="text-sm">Group: {data.group}</p>
                                    <p className="text-sm">
                                      Correlation: {data.correlation > 0 ? '+' : ''}{data.correlation.toFixed(2)}
                                    </p>
                                    <p className="text-sm">Importance: {data.importance}</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Scatter 
                            name="Features" 
                            data={correlationData} 
                            fill="#8884d8"
                            shape={(props) => {
                              const { cx, cy, payload } = props;
                              const color = payload.correlation > 0 ? '#ef4444' : '#22c55e';
                              return (
                                <circle 
                                  cx={cx} 
                                  cy={cy} 
                                  r={8}
                                  fill={color}
                                  opacity={0.7}
                                />
                              );
                            }}
                          />
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="w-full glass-card animate-fade-in">
                  <CardHeader className="pb-2">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
                      Churn Risk
                    </div>
                    <CardTitle>Churn Risk by Feature Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={[
                            { group: 'Pricing', riskScore: 78 },
                            { group: 'Contract', riskScore: 68 },
                            { group: 'Service', riskScore: 62 },
                            { group: 'Usage', riskScore: 45 },
                            { group: 'Demographics', riskScore: 38 },
                          ]}
                          layout="vertical"
                          margin={{ top: 20, right: 20, left: 100, bottom: 20 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                          <XAxis 
                            type="number" 
                            domain={[0, 100]}
                          />
                          <YAxis 
                            type="category" 
                            dataKey="group" 
                            width={80}
                          />
                          <Tooltip />
                          <Bar 
                            dataKey="riskScore" 
                            name="Risk Score" 
                            radius={[0, 4, 4, 0]}
                            label={(props) => {
                              const { x, y, width, height, value } = props;
                              return (
                                <text 
                                  x={x + width + 5} 
                                  y={y + height / 2} 
                                  fill="#666" 
                                  textAnchor="start" 
                                  dominantBaseline="middle"
                                >
                                  {value}
                                </text>
                              );
                            }}
                          >
                            {[
                              { group: 'Pricing', riskScore: 78 },
                              { group: 'Contract', riskScore: 68 },
                              { group: 'Service', riskScore: 62 },
                              { group: 'Usage', riskScore: 45 },
                              { group: 'Demographics', riskScore: 38 },
                            ].map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={entry.riskScore > 70 ? '#ef4444' : entry.riskScore > 50 ? '#f97316' : '#3b82f6'} 
                              />
                            ))}
                          </Bar>
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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

export default Analytics;
