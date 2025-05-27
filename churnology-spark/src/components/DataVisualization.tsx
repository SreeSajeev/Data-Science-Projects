
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockMonthlyChurnRate, mockSegmentChurn } from "@/utils/mockData";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DataVisualization = () => {
  // Calculated data for the third chart (Demographics)
  const demographicData = [
    { name: "Senior Citizens", value: 15 },
    { name: "Non-Senior Citizens", value: 85 },
    { name: "With Partner", value: 48 },
    { name: "Without Partner", value: 52 },
    { name: "With Dependents", value: 30 },
    { name: "Without Dependents", value: 70 },
  ];

  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8", "#1e40af"];

  // Recharts tooltip formatting
  const percentageFormatter = (value: number) => `${value}%`;

  return (
    <Card className="w-full glass-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
          Analytics
        </div>
        <CardTitle>Churn Trends & Patterns</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="monthly">Monthly Trends</TabsTrigger>
            <TabsTrigger value="segments">Customer Segments</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monthly" className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mockMonthlyChurnRate}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis
                  tickFormatter={percentageFormatter}
                  domain={[0.2, 0.32]}
                  tickCount={7}
                />
                <Tooltip
                  formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, "Churn Rate"]}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="churnRate"
                  name="Churn Rate"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="segments" className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockSegmentChurn}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis dataKey="segment" />
                <YAxis 
                  tickFormatter={percentageFormatter}
                  domain={[0, 0.4]}
                  tickCount={5}
                />
                <Tooltip 
                  formatter={(value) => [`${(Number(value) * 100).toFixed(1)}%`, "Churn Rate"]}
                />
                <Legend />
                <Bar
                  dataKey="churnRate"
                  name="Churn Rate"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="demographics" className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicData.slice(0, 2)}
                  cx="25%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {demographicData.slice(0, 2).map((entry, index) => (
                    <Cell key={`cell-age-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie
                  data={demographicData.slice(2, 4)}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {demographicData.slice(2, 4).map((entry, index) => (
                    <Cell key={`cell-partner-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                  ))}
                </Pie>
                <Pie
                  data={demographicData.slice(4, 6)}
                  cx="75%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={50}
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {demographicData.slice(4, 6).map((entry, index) => (
                    <Cell key={`cell-dependents-${index}`} fill={COLORS[(index + 4) % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataVisualization;
