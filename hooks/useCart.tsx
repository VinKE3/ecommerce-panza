import { createContext, useContext, useState } from "react";

type CartProductType = {
  cartTotalQty: number;
};

export const CartContext = createContext<CartProductType | null>(null);

interface Props {
  [propName: string]: any; // TODO: remove this line after adding props
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const value = {
    cartTotalQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
