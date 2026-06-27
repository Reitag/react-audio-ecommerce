import Layout from '@/layout/layout';
import { Catalog } from '@/pages/catalog';
import { ProductCart } from '@/pages/product-cart';
import { Route, Routes } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CartProvider } from '@/components/cart-provider';

const theme = createTheme({
  palette: {
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    primary: {
      main: '#faaf00',
    },
  },
});

export default function App(): React.ReactNode {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Catalog />}></Route>
              <Route path="product-cart" element={<ProductCart />}></Route>
            </Route>
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
