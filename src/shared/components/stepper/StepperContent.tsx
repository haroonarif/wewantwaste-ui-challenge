import React from 'react';
import Box from '@mui/material/Box';


interface StepperContentProps {
  content: React.ReactNode;
}

export const StepperContent = React.memo(({
  content
}: StepperContentProps) => (
  <Box>
    <Box sx={{ mb: 4, flex: 1 }}>
    {content}
  </Box>
  </Box>
));