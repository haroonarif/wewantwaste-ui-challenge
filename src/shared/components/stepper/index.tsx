import  { Suspense } from 'react';
import {  Paper, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStepper } from '../../hooks/useStepper';
import { StepperSidebar } from './StepperSidebar';
import { StepperContent } from './StepperContent';
import { StepperNavigation } from './StepperNavigation';
import { StepperLayout } from '../../../layouts/StepperLayout';
import { steps } from './steps';

export const SplitStepper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  
  const {
    activeStep,
    next,
    back,
    goTo,
    reset,
  } = useStepper(0, steps.length);

  const currentStep = steps[activeStep];

  return (
    <StepperLayout
      isMobile={isMobile}
      sidebar={
        <StepperSidebar
          steps={steps}
          activeStep={activeStep}
          onStepClick={goTo}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        />
      }
      content={
        <>
          <StepperContent
            content={currentStep.content}
          />
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3, mt: 2 }}>
              <Typography>All steps completed - you're finished</Typography>
              <Button onClick={reset} sx={{ mt: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </>
      }
      navigation={
        <Suspense fallback={<div>Loading navigation...</div>}>
          <StepperNavigation
            activeStep={activeStep}
            stepsLength={steps.length}
            onBack={back}
            onNext={next}
            onReset={reset}
          />
        </Suspense>
      }
    />
  );
};