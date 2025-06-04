import { Box, Typography } from '@mui/material'
import type { ISkippData } from '../interfaces'
import React from 'react'
interface Props {
  skip: ISkippData
}
const CardFooter = ({ skip }: Props) => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="body2">{skip.hire_period_days} day hire period</Typography>
      <Typography variant="body1" fontWeight="bold">
        £ {skip.price_before_vat}
      </Typography>
    </Box>
  )
}

export default React.memo(CardFooter);
