
import { useState } from 'react';
import { CustomerData, defaultCustomerData } from '@/utils/mockData';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

interface PredictionFormProps {
  onSubmit: (data: CustomerData) => void;
  isLoading: boolean;
}

const PredictionForm = ({ onSubmit, isLoading }: PredictionFormProps) => {
  const [formData, setFormData] = useState<CustomerData>({...defaultCustomerData});

  const handleChange = (field: keyof CustomerData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto glass-card animate-fade-in">
      <CardHeader>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
          Customer Data
        </div>
        <CardTitle className="text-2xl">Churn Prediction</CardTitle>
        <CardDescription>
          Enter customer details to predict their likelihood of churning
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select 
                value={formData.gender}
                onValueChange={(value) => handleChange('gender', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contract">Contract Type</Label>
              <Select 
                value={formData.contract} 
                onValueChange={(value) => handleChange('contract', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select contract type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Month-to-month">Month-to-month</SelectItem>
                  <SelectItem value="One year">One year</SelectItem>
                  <SelectItem value="Two year">Two year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="tenure">Tenure (Months)</Label>
                <span className="text-sm text-muted-foreground">{formData.tenure} months</span>
              </div>
              <Slider
                id="tenure"
                min={0}
                max={72}
                step={1}
                value={[formData.tenure]}
                onValueChange={(value) => handleChange('tenure', value[0])}
                className="py-2"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="monthlyCharges">Monthly Charges ($)</Label>
                <span className="text-sm text-muted-foreground">${formData.monthlyCharges.toFixed(2)}</span>
              </div>
              <Slider
                id="monthlyCharges"
                min={20}
                max={120}
                step={0.1}
                value={[formData.monthlyCharges]}
                onValueChange={(value) => handleChange('monthlyCharges', value[0])}
                className="py-2"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="internetService">Internet Service</Label>
              <Select 
                value={formData.internetService} 
                onValueChange={(value) => handleChange('internetService', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select internet service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="No">No</SelectItem>
                  <SelectItem value="DSL">DSL</SelectItem>
                  <SelectItem value="Fiber optic">Fiber optic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select 
                value={formData.paymentMethod} 
                onValueChange={(value) => handleChange('paymentMethod', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Electronic check">Electronic check</SelectItem>
                  <SelectItem value="Mailed check">Mailed check</SelectItem>
                  <SelectItem value="Bank transfer (automatic)">Bank transfer (automatic)</SelectItem>
                  <SelectItem value="Credit card (automatic)">Credit card (automatic)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="partner" className="flex-1">Partner</Label>
              <Switch
                id="partner"
                checked={formData.partner}
                onCheckedChange={(checked) => handleChange('partner', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="dependents" className="flex-1">Dependents</Label>
              <Switch
                id="dependents"
                checked={formData.dependents}
                onCheckedChange={(checked) => handleChange('dependents', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="seniorCitizen" className="flex-1">Senior Citizen</Label>
              <Switch
                id="seniorCitizen"
                checked={formData.seniorCitizen}
                onCheckedChange={(checked) => handleChange('seniorCitizen', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="paperlessBilling" className="flex-1">Paperless Billing</Label>
              <Switch
                id="paperlessBilling"
                checked={formData.paperlessBilling}
                onCheckedChange={(checked) => handleChange('paperlessBilling', checked)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading}
          className="w-full sm:w-auto"
        >
          {isLoading ? "Analyzing..." : "Predict Churn"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PredictionForm;
