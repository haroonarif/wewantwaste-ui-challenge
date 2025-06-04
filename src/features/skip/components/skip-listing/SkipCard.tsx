import React, { Suspense, useCallback } from 'react';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import CardFooter from './CardFooter';
import { carouselReducer } from './reducers/carouselReducer';
import type { ISkippData } from '../interfaces';
import { CarouselNavigation } from './CarouselNavigation';
import { CarouselImage } from './CarouselImage';
import { SizeBadge } from './SizeBadge';

export type ICardProps = {
  skip: ISkippData;
};

const CarouselCard = ({ skip }: ICardProps) => {
  console.log('skip', skip)
  const maxSteps = skip?.locationImages?.length;
  const [state, dispatch] = React.useReducer(carouselReducer, {
    activeStep: 0
  });

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch({ type: 'NEXT', maxSteps });
  }, [maxSteps]);

  const handleBack = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch({ type: 'PREV' });
  }, []);

  const handleStepChange = useCallback((step: number) => {
    dispatch({ type: 'GO_TO', step });
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'relative',
        height: '100%',
      }}
    >
      {skip.locationImages?.length > 0 && (
        <Box sx={{ position: 'relative' }}>
          <Suspense fallback={<span>Loading...</span>}>
            <SwipeableViews
              axis={'x'}
              index={state.activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {skip.locationImages.map((step) => (
                <div key={step.id}>
                  <Suspense fallback={<span>Loading...</span>}>
                    <CarouselImage url={step.url} id={step.id} />
                  </Suspense>
                </div>
              ))}
            </SwipeableViews>
          </Suspense>
          <Suspense fallback={<span>Loading...</span>}>
            <SizeBadge size={skip?.size} />
          </Suspense>
        </Box>
      )}

      {maxSteps > 1 && (
        <Box onClick={(e) => e.stopPropagation()}>
          <Suspense fallback={<span>Loading...</span>}>
            <CarouselNavigation
              activeStep={state.activeStep}
              maxSteps={maxSteps}
              onNext={handleNext}
              onPrev={handleBack}
            />
          </Suspense>
        </Box>
      )}
      
      <CardFooter skip={skip} />
    </Box>
  );
};

export default React.memo(CarouselCard);