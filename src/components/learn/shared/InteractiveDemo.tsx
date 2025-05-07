import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Step {
  title: string;
  content: string;
  action?: {
    label: string;
    handler: () => void;
  };
  hint?: string;
  feedback?: string;
}

interface InteractiveDemoProps {
  title: string;
  steps: Step[];
}

export function InteractiveDemo({ title, steps }: InteractiveDemoProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(new Array(steps.length).fill(false));
  const [feedback, setFeedback] = useState<string | null>(null);
  const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    const savedProgress = localStorage.getItem('interactive-demo-progress');
    if (savedProgress) {
      const { currentStep, completedSteps } = JSON.parse(savedProgress);
      setCurrentStep(currentStep);
      setCompletedSteps(completedSteps);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('interactive-demo-progress', JSON.stringify({ currentStep, completedSteps }));
  }, [currentStep, completedSteps]);

  const handleNext = () => {
    setCompletedSteps(prev => {
      const newCompletedSteps = [...prev];
      newCompletedSteps[currentStep] = true;
      return newCompletedSteps;
    });
    setCurrentStep(prev => Math.min(steps.length - 1, prev + 1));
  };

  const handleFeedback = (feedback: string) => {
    setFeedback(feedback);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Progress value={progress} className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Step {currentStep + 1}: {steps[currentStep].title}
          </h3>
          <p>{steps[currentStep].content}</p>
          {steps[currentStep].hint && (
            <div className="p-2 bg-gray-100 rounded">
              <strong>Hint:</strong> {steps[currentStep].hint}
            </div>
          )}
          {feedback && (
            <div className="p-2 bg-green-100 rounded">
              <strong>Feedback:</strong> {feedback}
            </div>
          )}
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            {steps[currentStep].action && (
              <Button 
                onClick={steps[currentStep].action.handler}
              >
                {steps[currentStep].action.label}
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </Button>
          </div>
          <div className="mt-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => handleFeedback(e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
