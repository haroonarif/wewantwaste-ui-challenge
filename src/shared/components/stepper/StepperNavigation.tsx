import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface StepperNavigationProps {
  activeStep: number;
  stepsLength: number;
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
}

export const StepperNavigation = React.memo(({
  activeStep,
  stepsLength,
  onBack,
  onNext,
  onReset
}: StepperNavigationProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      bgcolor: 'background.paper',
      borderTop: '1px solid #e0e0e0',
      p: 2,
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 1000,
      height: isMobile ? 'calc(12dvh)' : 'auto',
      '& .MuiButton-root': {
        height: isMobile ? '100%' : 'auto',
        minHeight: isMobile ? '48px' : 'auto'
      }
    }}>
      <Button
        disabled={activeStep === 0}
        onClick={onBack}
        sx={{ mr: 1 }}
        size={isMobile ? 'large' : 'medium'}
      >
        Back
      </Button>
      
      {activeStep < stepsLength - 1 ? (
        <Button 
          variant="contained" 
          onClick={onNext}
          size={isMobile ? 'large' : 'medium'}
        >
          Next
        </Button>
      ) : (
        <Button 
          variant="contained" 
          onClick={onReset}
          size={isMobile ? 'large' : 'medium'}
        >
          Finish & Reset
        </Button>
      )}
    </Box>
  );
});