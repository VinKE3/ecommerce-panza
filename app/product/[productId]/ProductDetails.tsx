"use client";
import Button from "@/app/components/Button";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import ProductImage from "../../components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
interface ProductDetailsProps {
  product: any;
}

export type CartProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { cartProducts, handleAddProductToCart } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCardProduct] = useState<CartProduct>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });
  const router = useRouter();

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCardProduct((prev) => {
      return {
        ...prev,
        selectedImg: value,
      };
    });
  }, []);

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 9) {
      return;
    }
    setCardProduct((prev) => {
      return {
        ...prev,
        quantity: ++prev.quantity,
      };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCardProduct((prev) => {
      return {
        ...prev,
        quantity: --prev.quantity,
      };
    });
  }, [cartProduct]);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item: CartProduct) => item.id === product.id
      );
      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Rating name="read-only" value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORIA:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">MARCA:</span> {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-600" : "text-rose-400"}>
          {product.inStock ? "Con Stock" : "Sin Stock"}
        </div>
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-600" size={30} />
              <span>Producto Agregado Al Carrito</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="Ver Carrito"
                outline
                onClick={() => router.push("/cart")}
              />
            </div>
          </>
        ) : (
          <>
            <SetColor
              images={product.images}
              cartProductType={cartProduct}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Agregar al carrito"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
