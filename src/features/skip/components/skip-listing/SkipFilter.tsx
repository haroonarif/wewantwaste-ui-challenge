import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { flexBetween } from '../../../../theme/commonStyles';
import { useStepper } from '../../../../shared/hooks/useStepper';
import { steps } from '../../../../shared/components/stepper/steps';
import type { ISkippData } from '../interfaces';
import { useSkipFilter } from './reducers/useSkipFilter';

interface SkipSizeFilterProps {
  data: ISkippData[];
  onFilterChange: (filteredData: ISkippData[]) => void;
}

export default function SkipSizeFilter({ data, onFilterChange }: SkipSizeFilterProps) {
  const {
    availableSizes,
    selectedSizes,
    handleFilterChange,
    filteredData
  } = useSkipFilter(data);

  const { activeStep } = useStepper(0, steps.length);
  const currentStep = steps[activeStep];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    onFilterChange(filteredData);
  }, [filteredData, onFilterChange]);

  return (
    <Box sx={flexBetween}>
      {!isMobile && (
        <Box>
          <Typography variant="h5" gutterBottom>
            {currentStep.label}
          </Typography>
          <Typography paragraph>
            {currentStep.description}
          </Typography>
        </Box>
      )}
      <Autocomplete
        multiple
        sx={{ width: isMobile ? '100%' : 300 }}
        options={availableSizes}
        getOptionLabel={(option) => `${option} yard`}
        value={selectedSizes}
        onChange={(_event, value) => handleFilterChange(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Filter by Skip Size"
            variant="outlined"
          />
        )}
      />
    </Box>
  );
}