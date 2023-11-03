import ProductItem from '../../components/Products/ProductItem';
import allProducts from '../../../data/allProducts';

function Products() {
  return (
    <section className="products p-5">
      <div className="container">
        {allProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
