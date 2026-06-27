import { CartItemData } from '@/context/cart-context';
import { useCart } from '@/hooks/use-cart';
import { AddCircle, DeleteForeverOutlined, RemoveCircle } from '@mui/icons-material';
import { Box, Button, Card, CardMedia, IconButton, Typography } from '@mui/material';

interface CartItemProps {
  data: CartItemData;
}

function CartItem({ data }: CartItemProps): React.ReactNode {
  const { addToCart, removeFromCart, decreaseQuantity } = useCart();
  const { title, price, img, quantity } = data;

  return (
    <Card
      sx={{
        width: '600px',
        height: '200px',
        borderRadius: '8px',
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '140px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ width: '100%', height: '120px' }}>
          {' '}
          <CardMedia
            component="img"
            image={img}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
          <IconButton sx={{ color: '#faaf00' }} onClick={() => decreaseQuantity(title)}>
            <RemoveCircle />
          </IconButton>

          <Typography variant="body1" component="span" sx={{ fontWeight: 'bold' }}>
            {quantity}
          </Typography>

          <IconButton sx={{ color: '#faaf00' }} onClick={() => addToCart(data)}>
            <AddCircle />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, marginLeft: '24px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography color="text.secondary">{price} ₽</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <IconButton aria-label="delete" color="error" onClick={() => removeFromCart(title)}>
          <DeleteForeverOutlined />
        </IconButton>
        <Typography sx={{ fontWeight: 'bold' }}>{price * quantity} ₽</Typography>
      </Box>
    </Card>
  );
}

export function ProductCart(): React.ReactNode {
  const { items } = useCart();
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box sx={{ padding: '20px 0px' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '16px',
        }}
      >
        Корзина
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {items.map((item) => (
            <Box key={item.title} sx={{ display: 'flex', paddingY: '10px' }}>
              <CartItem data={item} />
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '350px', ml: '30px' }}>
          <Box
            sx={{
              width: '100%',
              borderRadius: '20px',
              border: '1px solid #E0E0E0',
              boxShadow: 'none',
              padding: 0,
              overflow: 'visible',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                pb: '12px',
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Итого</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>{totalPrice} ₽</Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                width: 'calc(100% + 2px)',
                margin: '0 -1px -1px -1px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 'medium',
                paddingY: '14px',
                boxShadow: 'none',
                borderRadius: '20px',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: '#212121',
                  boxShadow: 'none',
                },
              }}
            >
              Перейти к оформлению
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
