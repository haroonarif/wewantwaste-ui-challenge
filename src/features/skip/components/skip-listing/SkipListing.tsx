import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CarouselCard from './SkipCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import type { ICardProps } from '../interfaces';

const SkipListing = ({ data }: ICardProps) => {
  const [selectedCardId, setSelectedCardId] = React.useState<number | null>(null);

  if (!data?.length) {
    return null;
  }

  const handleCardSelect = (id: number) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {data?.map((skip, index) => (
          //@ts-ignore
          <Grid 
            key={index}
            minHeight={160}
            size={{
              xs: 12,
              sm: 6,
              md: 6,
              lg: 3,
            }}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            onClick={() => handleCardSelect(skip.id)}
            sx={{
              position: 'relative',
              cursor: 'pointer',
              minHeight: 160,
              border: selectedCardId === skip.id ? '1px solid white' : 'none',
              borderRadius: 2,
              backgroundColor: selectedCardId === skip.id ? 'white' : 'transparent',
              padding: selectedCardId === skip.id ? '1px' : '0',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <CarouselCard skip={skip} />
            
            <Box sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '2px 8px',
            }}>
              {selectedCardId === skip.id ? (
                <>
                  <Typography variant="caption" color="#00509d" fontWeight="bold">
                    Selected
                  </Typography>
                  <CheckCircleIcon 
                    sx={{
                      color: '#00509d',
                      fontSize: 20,
                    }}
                  />
                </>
              ) : (
                <Typography variant="caption" color="text.secondary">
                  Select This Skip
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkipListing;