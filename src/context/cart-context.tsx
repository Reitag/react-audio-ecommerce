import { ItemData } from '@/data/data';
import { createContext } from 'react';

export interface CartItemData extends ItemData {
  quantity: number;
}

export interface CartContextConfig {
  items: CartItemData[];
  addToCart: (item: ItemData) => void;
  removeFromCart: (title: string) => void;
  decreaseQuantity: (title: string) => void;
}

export const CartContext = createContext<CartContextConfig | null>(null);
