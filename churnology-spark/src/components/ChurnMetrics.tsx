
import { Card, CardContent } from "@/components/ui/card";
import { mockChurnMetrics } from "@/utils/mockData";
import { TrendingDown, TrendingUp } from "lucide-react";

const ChurnMetrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
      {mockChurnMetrics.map((metric, index) => {
        const isPositiveChange = metric.change > 0;
        const isNegativeImpact = 
          (metric.name.includes("Churn") || metric.name.includes("Risk")) ? isPositiveChange : !isPositiveChange;

        let formattedValue = '';
        
        switch (metric.format) {
          case 'percentage':
            formattedValue = `${(metric.value * 100).toFixed(1)}%`;
            break;
          case 'currency':
            formattedValue = `$${metric.value.toLocaleString()}`;
            break;
          default:
            formattedValue = metric.value.toLocaleString();
        }

        let formattedChange = '';
        switch (metric.format) {
          case 'percentage':
            formattedChange = `${(metric.change * 100).toFixed(1)}%`;
            break;
          case 'currency':
            formattedChange = `$${Math.abs(metric.change).toLocaleString()}`;
            break;
          default:
            formattedChange = Math.abs(metric.change).toLocaleString();
        }
        
        return (
          <Card key={index} className="glass-card">
            <CardContent className="p-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  {metric.name}
                </p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">{formattedValue}</h3>
                  
                  <div 
                    className={`ml-2 flex items-center text-xs font-medium ${
                      isNegativeImpact ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {isPositiveChange ? (
                      <TrendingUp className="h-3 w-3 mr-0.5" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-0.5" />
                    )}
                    <span>
                      {isPositiveChange ? '+' : '-'} {formattedChange}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ChurnMetrics;
