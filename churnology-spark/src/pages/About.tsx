
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info, Users, Layers, Zap, Award, ThumbsUp } from "lucide-react";

const About = () => {
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
                About Churnology
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in">
                About <span className="text-blue-600">Churnology</span>
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-gray-600 animate-fade-in">
            Advanced customer churn prediction using machine learning to help businesses retain their valuable customers.
          </p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="border-b">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Churnology was founded with a clear mission: to help businesses identify at-risk customers before they leave. 
                Our platform combines advanced machine learning algorithms with intuitive visualizations to provide actionable 
                insights that reduce customer churn and increase retention. We believe that understanding the "why" behind 
                customer behavior is just as important as predicting "who" might leave.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader className="border-b">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <CardTitle>Our Team</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team consists of data scientists, machine learning engineers, and customer experience specialists who are 
                passionate about helping businesses grow through data-driven decision making.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-center font-medium text-lg">Data Scientists</h3>
                  <p className="text-center text-gray-600 text-sm mt-2">Experts in predictive modeling and machine learning algorithms</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Layers className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-center font-medium text-lg">Engineers</h3>
                  <p className="text-center text-gray-600 text-sm mt-2">Building robust, scalable infrastructure for predictive analytics</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <ThumbsUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-center font-medium text-lg">CX Specialists</h3>
                  <p className="text-center text-gray-600 text-sm mt-2">Translating insights into effective retention strategies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <CardTitle>Our Technology</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  Churnology uses ensemble machine learning models including gradient boosting and random forests to analyze 
                  customer data and identify patterns that indicate potential churn. Our models continuously learn and improve 
                  over time, adapting to changing customer behaviors and business conditions.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">XGBoost and Random Forest algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Feature importance analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Customer segmentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time prediction capabilities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="border-b">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <CardTitle>Why Choose Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  What sets Churnology apart is our focus on providing not just predictions, but actionable insights that help 
                  businesses develop effective retention strategies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <p className="text-gray-700"><span className="font-medium">Accuracy</span>: Our models achieve up to 85% prediction accuracy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <p className="text-gray-700"><span className="font-medium">Interpretability</span>: We explain the factors driving churn predictions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <p className="text-gray-700"><span className="font-medium">Actionability</span>: Specific recommendations for retention strategies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default About;
