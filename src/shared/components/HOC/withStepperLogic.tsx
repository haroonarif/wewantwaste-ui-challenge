import React from 'react';

interface StepperSteps {
  label: string;
  description: string;
  content: React.ReactNode;
}

export const withStepperLogic = (steps: StepperSteps[]) => {
  return (WrappedComponent: React.ComponentType<any>) => {
    return function WithStepperLogic(props: any) {
      const [activeStep, setActiveStep] = React.useState(0);

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleReset = () => {
        setActiveStep(0);
      };

      const handleStepClick = (index: number) => {
        setActiveStep(index);
      };

      return (
        <WrappedComponent
          {...props}
          steps={steps}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
          onReset={handleReset}
          onStepClick={handleStepClick}
        />
      );
    };
  };
};