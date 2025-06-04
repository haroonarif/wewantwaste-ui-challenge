import { Box, useTheme } from '@mui/material';
import type { ReactNode } from 'react';

interface StepperLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
  navigation: ReactNode;
  isMobile: boolean;
}

export const StepperLayout = ({
  sidebar,
  content,
  navigation,
  isMobile,
}: StepperLayoutProps) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ 
      width: '100%', 
      display: 'flex', 
      flexDirection: isMobile ? 'column' : 'row',
      height: '100dvh',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.default,
    }}>

      <Box sx={{ 
        width: isMobile ? '100%' : '280px',
        borderRight: isMobile ? 'none' : `1px solid ${theme.palette.divider}`,
        borderBottom: isMobile ? `1px solid ${theme.palette.divider}` : 'none',
        overflow: 'auto',
        flexShrink: 0,
        backgroundColor: theme.palette.background.paper,
      }}>
        {sidebar}
      </Box>

      <Box sx={{
        flex: 1,
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: isMobile ? 'calc(100dvh - 56px)' : '100%',
        p: 3,
        backgroundColor: theme.palette.background.default,
      }}>
        {content}
      </Box>

      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: isMobile ? 0 : '280px',
        right: 0,
        height: '56px',
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        zIndex: 1000,
      }}>
        {navigation}
      </Box>
    </Box>
  );
};