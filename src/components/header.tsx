import { useCart } from '@/hooks/use-cart';
import { FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, Box, Button, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Header(): React.ReactNode {
  const navigate = useNavigate();
  const { items } = useCart();

  const cartBadge = items.length ? (
    <Badge
      badgeContent={items.length}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: '#faaf00',
          color: '#fff',
          fontWeight: 600,
        },
      }}
    >
      <ShoppingCartOutlined fontSize="medium" />
    </Badge>
  ) : (
    <ShoppingCartOutlined fontSize="medium" />
  );

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '8px 0px',
      }}
    >
      <Button
        onClick={() => navigate('/')}
        sx={{
          fontWeight: 800,
          color: '#111111',
          fontSize: '20px',
          textTransform: 'none',
          minWidth: 'auto',
          padding: 0,
          '&:hover': {
            background: 'none',
            opacity: 0.8,
          },
        }}
      >
        QPICK
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <IconButton sx={{ color: '#737373' }}>
          <Badge
            badgeContent={2}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#faaf00',
                color: '#fff',
                fontWeight: 600,
              },
            }}
          >
            <FavoriteBorder fontSize="medium" />
          </Badge>
        </IconButton>
        <IconButton sx={{ color: '#737373' }} onClick={() => navigate('/product-cart')}>
          {cartBadge}
        </IconButton>
      </Box>
    </Box>
  );
}
