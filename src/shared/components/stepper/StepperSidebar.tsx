import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

interface StepperSidebarProps {
  steps: { label: string }[];
  activeStep: number;
  onStepClick: (index: number) => void;
  orientation?: 'horizontal' | 'vertical';
}

export const StepperSidebar = React.memo(({
  steps,
  activeStep,
  onStepClick,
  orientation = 'vertical'
}: StepperSidebarProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      paddingY:isMobile ?0: .5,
      '&:after': {
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '30px',
        background: isMobile 
          ? `linear-gradient(90deg, transparent 0%, ${theme.palette.background.default} 100%)`
          : 'none',
        pointerEvents: 'none',
        display: isMobile ? 'block' : 'none'
      }
    }}>
      <Box sx={{
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        py: isMobile ? 1.5 : 0,
        px: isMobile ? 0 : 2,
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        <Stepper 
          activeStep={activeStep}
          orientation={isMobile ? 'horizontal' : orientation}
          sx={{
            minWidth: isMobile ? 'max-content' : '100%',
            '& .MuiStepConnector-root': {
              marginLeft: isMobile ? 0 : '12px', 
              '&.MuiStepConnector-vertical': {
                marginLeft: '19px',
                padding: '0px 0' 
              },
              '&.MuiStepConnector-horizontal': {
                marginTop: '12px', 
                marginLeft: 'calc(-50% + 20px)',
                marginRight: 'calc(50% + 20px)'
              }
            },
            '& .MuiStepConnector-line': {
              borderColor: isDarkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
              borderLeftWidth: isMobile ? 0 : '1px',
              borderBottomWidth: isMobile ? '1px' : 0,
              minHeight: isMobile ? 0 : '20px' 
            }
          }}
        >
          {steps.map((step, index) => (
            <Step 
              key={`${step.label}-${index}`}
              onClick={() => onStepClick(index)}
              sx={{
                padding: 0, 
                minWidth: isMobile ? 140 : 'auto',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: isMobile 
                    ? theme.palette.action.hover 
                    : 'transparent'
                },
                '&.Mui-completed': {
                  '& .MuiStepLabel-iconContainer': {
                    color: theme.palette.success.main
                  }
                },
                '&.Mui-active': {
                  '& .MuiStepLabel-label': {
                    fontWeight: 600,
                    color: theme.palette.text.primary
                  }
                }
              }}
            >
              <StepLabel
                optional={
                  index === steps.length - 1 && !isMobile ? (
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <CheckCircleRoundedIcon fontSize="inherit" />
                      Last step
                    </Typography>
                  ) : null
                }
                sx={{ 
                  cursor: 'pointer',
                  padding: isMobile ? '8px' : '12px 8px', 
                  '& .MuiStepLabel-labelContainer': {
                    marginTop: '4px' 
                  }
                }}
                StepIconComponent={(props) => (
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      backgroundColor: props.active || props.completed 
                        ? theme.palette.primary.main 
                        : theme.palette.action.disabledBackground,
                      color: props.active || props.completed 
                        ? theme.palette.primary.contrastText 
                        : theme.palette.text.disabled,
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    {props.completed ? (
                      <CheckCircleRoundedIcon sx={{ fontSize: 16 }} />
                    ) : (
                      props.icon
                    )}
                  </Box>
                )}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: isMobile ? '0.8125rem' : '0.875rem'
                  }}
                >
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
});