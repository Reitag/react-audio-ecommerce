import { CartContext, CartContextConfig } from '@/context/cart-context';
import { useContext } from 'react';

export function useCart(): CartContextConfig {
  const context = useContext(CartContext);
  if (!context) throw new Error('Context have not been created');

  return context;
}
