"use client";

import { CartProduct } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProduct;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}

const btnStyle = "border-[2px] border-slate-300 rounded-lg cursor-pointer px-2";

const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">CANTIDAD:</div>}
      <div className="flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={handleQtyDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={btnStyle} onClick={handleQtyIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
