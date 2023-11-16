import allProducts from '../../../data/allProducts';

import ProductItem from '../../components/Products/ProductItem';

function Products() {
  return (
    <main className="products p-5">
      <div className="container">
        {allProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Products;
