
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeatureImportance } from "@/utils/mockData";

interface PredictionResultProps {
  churnProbability: number;
  isChurned: boolean;
  confidence: number;
  topFactors: FeatureImportance[];
  isLoading: boolean;
}

const PredictionResult = ({
  churnProbability,
  isChurned,
  confidence,
  topFactors,
  isLoading,
}: PredictionResultProps) => {
  if (isLoading) {
    return (
      <Card className="w-full glass-card h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16 rounded-full border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent animate-spin"></div>
          <p className="text-lg font-medium text-gray-600">Analyzing customer data...</p>
        </div>
      </Card>
    );
  }

  if (churnProbability === 0) {
    return (
      <Card className="w-full glass-card h-[300px] flex items-center justify-center opacity-80">
        <div className="text-center px-4">
          <p className="text-lg font-medium text-gray-500">
            Submit customer data to see churn prediction results
          </p>
        </div>
      </Card>
    );
  }

  const percentProbability = (churnProbability * 100).toFixed(1);
  const percentConfidence = (confidence * 100).toFixed(0);

  return (
    <Card className="w-full glass-card animate-fade-in overflow-hidden">
      <CardHeader className="pb-0">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-1">
          Prediction Result
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`relative w-48 h-48 rounded-full flex items-center justify-center mb-6 border-8 ${
              isChurned
                ? "border-red-500/20 bg-red-50"
                : "border-green-500/20 bg-green-50"
            }`}
          >
            <svg
              className="absolute inset-0"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke={isChurned ? "#ef4444" : "#22c55e"}
                strokeWidth="8"
                strokeDasharray={`${churnProbability * 289} 289`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="text-center z-10">
              <p className="text-4xl font-bold">
                {percentProbability}
                <span className="text-lg">%</span>
              </p>
              <p className="text-sm font-medium mt-1 text-gray-500">
                Churn Probability
              </p>
            </div>
          </div>

          <div className="mb-6 text-center">
            <h3
              className={`text-2xl font-bold ${
                isChurned ? "text-red-600" : "text-green-600"
              }`}
            >
              {isChurned ? "High Risk of Churn" : "Low Risk of Churn"}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Prediction Confidence: {percentConfidence}%
            </p>
          </div>

          {topFactors.length > 0 && (
            <div className="w-full">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Top Contributing Factors
              </h4>
              <div className="space-y-2">
                {topFactors.map((factor, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-1 h-8 rounded-full mr-2 ${
                        factor.direction === "positive"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {factor.feature}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            factor.direction === "positive"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {factor.direction === "positive" ? "+" : "-"}
                          {(factor.importance * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`h-full rounded-full ${
                            factor.direction === "positive"
                              ? "bg-red-500"
                              : "bg-green-500"
                          }`}
                          style={{ width: `${factor.importance * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionResult;
