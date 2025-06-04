import { useState } from 'react';

export const useStepper = (initialStep = 0, maxSteps: number) => {
  const [activeStep, setActiveStep] = useState(initialStep);

  const next = () => setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  const back = () => setActiveStep((prev) => Math.max(prev - 1, 0));
  const goTo = (step: number) => setActiveStep(Math.min(Math.max(step, 0), maxSteps - 1))
  const reset = () => setActiveStep(0);

  return {
    activeStep,
    next,
    back,
    goTo,
    reset,
    isFirstStep: activeStep === 0,
    isLastStep: activeStep === maxSteps - 1,
  };
};