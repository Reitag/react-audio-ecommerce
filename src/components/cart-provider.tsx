import { CartContext, CartContextConfig, CartItemData } from '@/context/cart-context';
import { ItemData } from '@/data/data';
import { useState } from 'react';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItemData[]>([]);

  const addToCart = (item: ItemData) => {
    setItems((prevItems) => {
      const isExist = prevItems.some((prevItem) => prevItem.title === item.title);

      if (isExist) {
        return prevItems.map((prevItem) =>
          prevItem.title === item.title
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : { ...prevItem }
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const decreaseQuantity = (title: string) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === title);

      if (!existingItem) return prevItems;

      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.title !== title);
      }

      return prevItems.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (title: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  const contextValue: CartContextConfig = {
    items,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
