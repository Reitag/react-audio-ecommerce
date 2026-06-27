import { ItemData } from '@/data/data';
import { useCart } from '@/hooks/use-cart';
import { Star } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export interface ItemCardProps {
  data: ItemData;
}

export function ItemCard({ data }: ItemCardProps): React.ReactNode {
  const { addToCart, items } = useCart();
  const { title, price, rate, img } = data;

  const isAlreadyInCart = items.some((item) => item.title === title);

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '100%', height: '200px', pt: 2 }}>
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>

      <CardContent
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Stack spacing={2} sx={{ flex: 1, mr: 1 }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: 'bold', lineHeight: 1.2 }}
            >
              {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ color: '#faaf00', fontSize: '1.1rem' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                {rate}
              </Typography>
            </Box>
          </Stack>

          <Stack spacing={2} sx={{ alignItems: 'flex-end', textAlign: 'right' }}>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: 'bold', color: '#faaf00', lineHeight: 1.2 }}
            >
              {price} ₽
            </Typography>

            <Button
              variant="text"
              onClick={() => addToCart(data)}
              disabled={isAlreadyInCart}
              size="small"
              sx={{
                whiteSpace: 'nowrap',
                fontWeight: 'bold',
                color: isAlreadyInCart ? 'text.disabled' : '#000000',
              }}
            >
              {isAlreadyInCart ? 'В корзине' : 'Купить'}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
