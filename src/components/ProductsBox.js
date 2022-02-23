import ProductTemplate from "./ProductTemplate";
import '../styles/ProductsBox.css';

function ProductsBox({ products, removeProduct, message }) {
  if (products.length === 0) return <>{message}</>;
  return (
    <div className="box">
      {products.map((product) => (
        <ProductTemplate
          name={product.name}
          description={product.description}
          day={product.day}
          month={product.month}
          year={product.year}
          id={product.id}
          interval={product.interval}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
}

export default ProductsBox;
