import Layout from '@/layout/layout';
import { Catalog } from '@/pages/catalog';
import { ProductCart } from '@/pages/product-cart';
import { Route, Routes } from 'react-router-dom';

export default function App(): React.ReactNode {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />}></Route>
          <Route path="product-cart" element={<ProductCart />}></Route>
        </Route>
      </Routes>
    </main>
  );
}
