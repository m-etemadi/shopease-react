import ProductItem from '../../components/ProductItem/ProductItem';
import products from '../../data/products';

function Homepage() {
  return (
    <section className="products p-5">
      <div className="container">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Homepage;
