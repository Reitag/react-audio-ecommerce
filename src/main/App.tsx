import { Catalog } from '@/pages/catalog';
import { ProductCart } from '@/pages/product-cart';
import { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Catalog />}></Route>
        <Route path="product-cart" element={<ProductCart />}></Route>
      </Routes>
    </main>
  );
}
