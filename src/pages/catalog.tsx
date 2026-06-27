import { ItemCard } from '@/components/item-card';
import { headphones } from '@/data/data';
import { Box, Grid, Typography } from '@mui/material';

export function Catalog(): React.ReactNode {
  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', padding: '20px 0px' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontWeight: 'bold', color: '#1a1a1a', marginBottom: '16px' }}
      >
        Наушники
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        {headphones.map((item, index) => {
          return (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ItemCard key={index} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
