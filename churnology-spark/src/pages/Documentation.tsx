
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, Code, HelpCircle, Settings, PieChart, BarChart, LineChart, Users } from "lucide-react";

const Documentation = () => {
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
                Project Documentation
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 animate-fade-in">
                <span className="text-blue-600">Churnology</span> Technical Documentation
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-gray-600 animate-fade-in">
            Detailed documentation of what has been implemented in the Churnology customer churn prediction platform
          </p>
        </div>
      </section>
      
      {/* Documentation Content */}
      <section className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-white border overflow-x-auto">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Project Overview
              </TabsTrigger>
              <TabsTrigger value="components" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Components
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center gap-2">
                <BarChart className="w-4 h-4" />
                Data & Mock Implementation
              </TabsTrigger>
              <TabsTrigger value="pages" className="flex items-center gap-2">
                <LineChart className="w-4 h-4" />
                Pages Structure
              </TabsTrigger>
              <TabsTrigger value="hooks" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Hooks & Utilities
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                  <CardDescription>What has been implemented in this application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">What is Churnology?</h3>
                      <p className="mt-2 text-gray-700">
                        Churnology is a front-end visualization and dashboard project for customer churn prediction. 
                        It includes a UI for displaying predictions and visualizing analytics but does not include 
                        actual machine learning functionality. Instead, it uses mock data to simulate what a full
                        implementation would look like.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Key Implemented Features</h3>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Frontend UI for customer churn prediction (using mock data)</li>
                        <li>Dashboard with visualizations for churn metrics</li>
                        <li>Analytics page with additional data visualizations</li>
                        <li>Responsive design for all screen sizes</li>
                        <li>Navigation system with routing between pages</li>
                        <li>Loading states and error handling</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Technology Stack</h3>
                      <p className="mt-2 text-gray-700">
                        The following technologies are used in this project:
                      </p>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded border">
                          <h4 className="text-sm font-medium">Frontend Framework</h4>
                          <ul className="mt-1 text-xs text-gray-600 list-disc pl-4">
                            <li>React with TypeScript</li>
                            <li>Vite as build tool</li>
                            <li>React Router for navigation</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border">
                          <h4 className="text-sm font-medium">UI Components</h4>
                          <ul className="mt-1 text-xs text-gray-600 list-disc pl-4">
                            <li>TailwindCSS for styling</li>
                            <li>Shadcn/UI component library</li>
                            <li>Lucide React for icons</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border">
                          <h4 className="text-sm font-medium">Data Visualization</h4>
                          <ul className="mt-1 text-xs text-gray-600 list-disc pl-4">
                            <li>Recharts library</li>
                            <li>Custom visualization components</li>
                            <li>Animated data representations</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-3 rounded border">
                          <h4 className="text-sm font-medium">State Management</h4>
                          <ul className="mt-1 text-xs text-gray-600 list-disc pl-4">
                            <li>React Hooks for local state</li>
                            <li>TanStack Query (placeholder setup)</li>
                            <li>Mock data utilities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">What Was NOT Implemented</h3>
                      <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-md text-amber-800">
                        <h4 className="font-medium">Important Note:</h4>
                        <p className="mt-1 text-sm">
                          This is a frontend-only implementation. The following features have NOT been implemented:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                          <li>Actual machine learning models (all predictions use mock data)</li>
                          <li>Backend API or server functionality</li>
                          <li>Real database connections</li>
                          <li>User authentication or authorization</li>
                          <li>Data storage or persistence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="components">
              <Card>
                <CardHeader>
                  <CardTitle>Components Implementation</CardTitle>
                  <CardDescription>Key components and their implementation details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">Header Component</h3>
                      <p className="mt-2 text-gray-700">
                        The Header component (<code>src/components/Header.tsx</code>) provides navigation across the application:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
                        <li>Responsive design with mobile adaptation</li>
                        <li>Scroll-based styling changes using <code>useEffect</code> and scroll event listeners</li>
                        <li>Active link highlighting based on current route</li>
                        <li>Logo and brand elements</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Prediction Components</h3>
                      <p className="mt-2 text-gray-700">
                        The prediction functionality is split between several components:
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">PredictionForm</h4>
                          <p className="mt-2 text-sm text-gray-700">
                            This component (<code>src/components/PredictionForm.tsx</code>) displays a form for users to input 
                            customer data. It uses standard form controls with state management for inputs.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">PredictionResult</h4>
                          <p className="mt-2 text-sm text-gray-700">
                            This component (<code>src/components/PredictionResult.tsx</code>) visualizes prediction results 
                            with a circular gauge, displays confidence metrics, and shows top contributing factors.
                            It includes loading states and empty states.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Visualization Components</h3>
                      <p className="mt-2 text-gray-700">
                        Several components display data visualizations:
                      </p>
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">ChurnMetrics</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Displays key metrics as cards with values and change indicators using mock data.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">FeatureImportance</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Shows bar chart visualization of feature importance using mock data.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">DataVisualization</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Renders data distribution charts for customer segments using mock data.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">ChurnTrend</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Line chart showing churn rate trends over time using Recharts and mock data.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <h4 className="font-medium text-gray-900">CustomerSegments</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Bar chart comparing churn rates across different customer segments using mock data.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle>Data & Mock Implementation</CardTitle>
                  <CardDescription>How data is simulated in the application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="text-lg font-medium">Mock Data Implementation</h3>
                      <p className="mt-2 text-gray-700">
                        The application uses a mock data system in <code>src/utils/mockData.ts</code> with the following elements:
                      </p>
                      
                      <div className="mt-4 space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900">Customer Data TypeScript Interface</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            A TypeScript interface (<code>CustomerData</code>) defines the structure of customer data with fields like:
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-gray-600 list-disc pl-5">
                            <li>Demographic information (gender, age, etc.)</li>
                            <li>Service information (services subscribed)</li>
                            <li>Account details (tenure, contract type)</li>
                            <li>Financial information (charges)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Feature Importance Interface</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            The <code>FeatureImportance</code> interface defines the structure for churn factors:
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-gray-600 list-disc pl-5">
                            <li>feature: The name of the feature</li>
                            <li>importance: Numerical weight of the feature</li>
                            <li>direction: Whether the feature increases or decreases churn probability</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Mock Data Arrays</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            Several arrays contain static mock data:
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-gray-600 list-disc pl-5">
                            <li><code>mockCustomers</code>: Sample customer records</li>
                            <li><code>mockFeatureImportance</code>: Sample feature importance data</li>
                            <li><code>mockChurnMetrics</code>: Sample churn metric values</li>
                            <li><code>mockMonthlyChurnRate</code>: Sample time series data</li>
                            <li><code>mockSegmentChurn</code>: Sample segment comparison data</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900">Random Data Generation</h4>
                          <p className="mt-1 text-sm text-gray-700">
                            The <code>getRandomChurnPrediction()</code> function generates random prediction results:
                          </p>
                          <ul className="mt-2 space-y-1 text-xs text-gray-600 list-disc pl-5">
                            <li>Generates a random probability number</li>
                            <li>Sets the churn status based on a 0.5 threshold</li>
                            <li>Returns the top 3 factors from the mock feature importance data</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Data Flow & Simulation</h3>
                      <p className="mt-2 text-gray-700">
                        The application uses a custom hook (<code>usePrediction</code>) to simulate ML prediction:
                      </p>
                      <ol className="mt-4 space-y-3 text-gray-700 list-decimal pl-5">
                        <li>
                          <p><span className="font-medium">Form Input</span>: User enters customer data in the PredictionForm.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Prediction Request</span>: The form calls <code>predictChurn()</code> from the usePrediction hook.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Loading State</span>: The hook sets a loading state while "processing".</p>
                        </li>
                        <li>
                          <p><span className="font-medium">API Simulation</span>: A timeout simulates an API call delay.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Mock Result</span>: <code>getRandomChurnPrediction()</code> is called to generate a random result.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Result Processing</span>: Confidence is calculated based on how far the probability is from 0.5.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Toast Notification</span>: A notification informs the user of the prediction result.</p>
                        </li>
                        <li>
                          <p><span className="font-medium">Result Display</span>: The PredictionResult component displays the prediction outcome.</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pages">
              <Card>
                <CardHeader>
                  <CardTitle>Pages Structure</CardTitle>
                  <CardDescription>Implementation of different application pages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">Application Routing</h3>
                      <p className="mt-2 text-gray-700">
                        The application uses React Router for navigation with the following routes defined in <code>src/App.tsx</code>:
                      </p>
                      <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded font-mono text-sm overflow-x-auto">
<pre>{`<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/about" element={<About />} />
    <Route path="/documentation" element={<Documentation />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>`}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Index Page (Home)</h3>
                      <p className="mt-2 text-gray-700">
                        The home page (<code>src/pages/Index.tsx</code>) includes:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Hero section with product introduction</li>
                        <li>ChurnMetrics component showing key metrics</li>
                        <li>PredictionForm component for data input</li>
                        <li>PredictionResult component for displaying results</li>
                        <li>Additional visualization components</li>
                        <li>Navigation links to other pages</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        The page uses the usePrediction hook to handle user input and display results.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Dashboard Page</h3>
                      <p className="mt-2 text-gray-700">
                        The dashboard page (<code>src/pages/Dashboard.tsx</code>) focuses on data visualization:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>ChurnMetrics component showing key metrics</li>
                        <li>ChurnTrend component showing trends over time</li>
                        <li>CustomerSegments component for segment analysis</li>
                        <li>FeatureImportance component showing important factors</li>
                        <li>DataVisualization component for additional insights</li>
                        <li>Back button for easy navigation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Analytics Page</h3>
                      <p className="mt-2 text-gray-700">
                        The analytics page (<code>src/pages/Analytics.tsx</code>) provides more advanced analysis:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Advanced metrics and visualizations</li>
                        <li>Cohort analysis section</li>
                        <li>Correlation analysis section</li>
                        <li>Back button for easy navigation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Documentation Page</h3>
                      <p className="mt-2 text-gray-700">
                        The documentation page (this page) uses Shadcn UI tabs to organize content into sections:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Project Overview tab</li>
                        <li>Components tab</li>
                        <li>Data & Mock Implementation tab</li>
                        <li>Pages Structure tab</li>
                        <li>Hooks & Utilities tab</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">NotFound Page</h3>
                      <p className="mt-2 text-gray-700">
                        A simple 404 page is implemented to handle non-existent routes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="hooks">
              <Card>
                <CardHeader>
                  <CardTitle>Hooks & Utilities</CardTitle>
                  <CardDescription>Custom hooks and utility functions in the application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">usePrediction Hook</h3>
                      <p className="mt-2 text-gray-700">
                        The <code>usePrediction</code> hook (<code>src/hooks/usePrediction.ts</code>) manages the churn prediction functionality:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Maintains state for the prediction result using React's <code>useState</code></li>
                        <li>Exposes a <code>predictChurn</code> method that accepts customer data</li>
                        <li>Simulates an API call with a timeout</li>
                        <li>Uses the <code>getRandomChurnPrediction</code> function from mockData.ts</li>
                        <li>Calculates confidence based on how far the probability is from 0.5</li>
                        <li>Updates the result state with prediction information</li>
                        <li>Displays a toast notification with the prediction result</li>
                        <li>Handles errors with try/catch and shows error toast notifications</li>
                      </ul>
                      <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded font-mono text-sm overflow-x-auto">
<pre>{`// Return value structure of usePrediction
{
  isLoading: boolean;
  churnProbability: number;
  isChurned: boolean;
  confidence: number;
  topFactors: FeatureImportance[];
  error: string | null;
  predictChurn: (customerData: CustomerData) => Promise<void>;
}`}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Toast Notifications</h3>
                      <p className="mt-2 text-gray-700">
                        The application uses two toast systems:
                      </p>
                      <ul className="mt-2 space-y-2 text-gray-700 list-disc pl-5">
                        <li>Shadcn UI's toast component</li>
                        <li>Sonner toast library</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        These are used to show notifications for prediction results and errors.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">React Query Integration</h3>
                      <p className="mt-2 text-gray-700">
                        The application includes TanStack Query setup in <code>App.tsx</code>:
                      </p>
                      <div className="mt-4 bg-gray-800 text-gray-200 p-4 rounded font-mono text-sm overflow-x-auto">
<pre>{`const queryClient = new QueryClient();

// QueryClientProvider wraps the application
<QueryClientProvider client={queryClient}>
  {/* Application components */}
</QueryClientProvider>`}</pre>
                      </div>
                      <p className="mt-2 text-gray-700">
                        While the query client is set up, it's not actively used for data fetching since the application
                        uses mock data. In a real implementation, React Query would be used to fetch data from APIs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

export default Documentation;

