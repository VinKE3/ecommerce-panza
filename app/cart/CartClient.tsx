"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">El carrito esta Vacio</div>
        <div>
          <Link
            href="/"
            className="text-slate-400 flex items-center gap-1 mt-2"
          >
            <MdArrowBack size={24} />
            <span>Volver a la tienda</span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Carrito de Compras" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-10">
        <div className="col-span-2 justify-self-start">PRODUCTO</div>
        <div className="justify-self-center">PRECIO</div>
        <div className="justify-self-center">CANTIDAD</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[10rem]">
          <Button
            label="Limpiar Carrito"
            onClick={() => {
              handleClearCart();
            }}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>SubTotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Los costos de envío e impuestos se calculan en el checkout.
          </p>
          <Button label="Finalizar Compra" onClick={() => {}} />
          <Link
            href="/"
            className="text-slate-400 flex items-center gap-1 mt-2"
          >
            <MdArrowBack size={24} />
            <span>Continuar Comprando</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
