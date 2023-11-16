import allProducts from '../../../data/allProducts';

import ProductItem from '../../components/Products/ProductItem';

import styles from './Products.module.css';

function Products() {
  return (
    <main className="p-5">
      <div className={styles.container}>
        {allProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Products;
