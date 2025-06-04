import { 
  Box, 
  Skeleton, 
  Grid, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import React from 'react';

 const CardSkeletonLoader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let gridTemplate;
  if (isMobile) {
    gridTemplate = 'repeat(auto-fill, minmax(280px, 1fr))';
  } else if (isTablet) {
    gridTemplate = 'repeat(2, 1fr)';
  } else {
    gridTemplate = 'repeat(4, 1fr)';
  }

  return (
    <Box sx={{ 
      width: '100%',
      padding: isMobile ? 1 : 2
    }}>
      <Grid container spacing={2} sx={{
        display: 'grid',
        gridTemplateColumns: gridTemplate,
        gap: 2
      }}>
        {[...Array(isMobile ? 2 : 8)].map((_, index) => (
          //@ts-ignore
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: theme.shadows[1],
              backgroundColor: theme.palette.background.paper
            }}>
              <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={isMobile ? 120 : 160} 
                animation="wave"
              />
              <Box sx={{ p: 2 }}>
                <Skeleton 
                  variant="text" 
                  width="60%" 
                  height={24} 
                  animation="wave"
                  sx={{ mb: 1 }}
                />
                <Skeleton 
                  variant="text" 
                  width="80%" 
                  height={20} 
                  animation="wave"
                  sx={{ mb: 1.5 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Skeleton 
                    variant="text" 
                    width="30%" 
                    height={20} 
                    animation="wave"
                  />
                  <Skeleton 
                    variant="circular" 
                    width={24} 
                    height={24} 
                    animation="wave"
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(CardSkeletonLoader);