interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log(params);
  return <div>Product</div>;
};

export default Product;
