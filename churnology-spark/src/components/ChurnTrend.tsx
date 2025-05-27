
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { mockMonthlyChurnRate } from '@/utils/mockData';

const ChurnTrend = () => {
  // Convert the data for the chart
  const chartData = mockMonthlyChurnRate.map(item => ({
    month: item.month,
    churnRate: item.churnRate * 100  // Convert to percentage
  }));

  // Calculate trend
  const latestMonth = chartData[chartData.length - 1];
  const previousMonth = chartData[chartData.length - 2];
  const isIncreasing = latestMonth.churnRate > previousMonth.churnRate;
  const percentChange = Math.abs(
    ((latestMonth.churnRate - previousMonth.churnRate) / previousMonth.churnRate) * 100
  ).toFixed(1);

  return (
    <Card className="w-full glass-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
          Trend Analysis
        </div>
        <CardTitle className="flex justify-between items-center">
          <span>Monthly Churn Rate</span>
          <span className={`text-sm font-medium ${isIncreasing ? 'text-red-500' : 'text-green-500'}`}>
            {isIncreasing ? '↑' : '↓'} {percentChange}%
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ChartContainer
            config={{
              churnRate: {
                label: "Churn Rate",
                color: "#3b82f6",
              },
            }}
          >
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                domain={['dataMin', 'dataMax']}
                tickCount={5}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => [`${value}%`, "Churn Rate"]}
                  />
                }
              />
              <Line
                type="monotone"
                dataKey="churnRate"
                stroke="var(--color-churnRate)"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChurnTrend;
