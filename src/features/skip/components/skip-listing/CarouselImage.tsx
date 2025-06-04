import { Box } from "@mui/material";

export const CarouselImage = ({ url, id }: { url: string; id: number }) => (
    <div key={id}>
      <Box
        component="img"
        sx={{
          borderRadius: 2,
          height: 200,
          display: 'block',
          overflow: 'hidden',
          width: '100%',
          objectFit: 'cover',
        }}
        src={url}
        alt={id.toString()}
        loading="lazy"
      />
    </div>
  );
  