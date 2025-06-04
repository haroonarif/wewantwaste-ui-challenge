import { Typography } from "@mui/material";

export const SizeBadge = ({ size }: { size: number }) => (
    <Typography
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: "#00509d",
        color: 'white',
        paddingX: 1,
        paddingY: .5,
        borderRadius: 2,
        fontSize: 12
      }}
    >
      {size} Yards
    </Typography>
  );
  