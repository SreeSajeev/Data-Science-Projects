
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockFeatureImportance } from "@/utils/mockData";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const FeatureImportance = () => {
  // Prepare data for visualization
  const chartData = mockFeatureImportance
    .sort((a, b) => b.importance - a.importance)
    .map(item => ({
      name: item.feature,
      value: parseFloat((item.importance * 100).toFixed(1)),
      impact: item.direction
    }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{payload[0].payload.name}</p>
          <p className="text-sm">
            <span>Impact: </span>
            <span className={payload[0].payload.impact === 'positive' ? 'text-red-600' : 'text-green-600'}>
              {payload[0].payload.impact === 'positive' ? 'Increases' : 'Decreases'} churn
            </span>
          </p>
          <p className="text-sm">Importance: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full glass-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
          Model Insights
        </div>
        <CardTitle>Feature Importance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={chartData}
              margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis 
                type="number"
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis 
                type="category" 
                dataKey="name"
                tick={{ fontSize: 12 }}
                width={120}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.impact === 'positive' ? '#ef4444' : '#22c55e'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureImportance;
