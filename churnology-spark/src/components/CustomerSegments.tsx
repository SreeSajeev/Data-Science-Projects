
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { mockSegmentChurn } from '@/utils/mockData';

const CustomerSegments = () => {
  // Convert the data for the chart
  const chartData = mockSegmentChurn.map(item => ({
    segment: item.segment,
    churnRate: item.churnRate * 100  // Convert to percentage
  }));

  // Find highest churn segment
  const highestChurnSegment = [...chartData].sort((a, b) => b.churnRate - a.churnRate)[0];

  return (
    <Card className="w-full glass-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
          Segment Analysis
        </div>
        <CardTitle className="flex justify-between items-center">
          <span>Customer Segments</span>
          <span className="text-sm font-medium text-red-500">
            Highest: {highestChurnSegment.segment} ({highestChurnSegment.churnRate.toFixed(1)}%)
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
            <BarChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis dataKey="segment" />
              <YAxis
                tickFormatter={(value) => `${value}%`}
                domain={[0, Math.ceil(Math.max(...chartData.map(d => d.churnRate)) * 1.1)]}
                tickCount={5}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => [`${value}%`, "Churn Rate"]}
                  />
                }
              />
              <Bar
                dataKey="churnRate"
                fill="var(--color-churnRate)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSegments;
