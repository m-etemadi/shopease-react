import { useLoaderData } from 'react-router-dom';

import { getProducts } from '../../services/apiProducts';

import ProductItem from './ProductItem/ProductItem';

import styles from './Products.module.css';

function Products() {
  const allProducts = useLoaderData();

  return (
    <div className={`container-primary ${styles.container}`}>
      {allProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export async function loader() {
  const allProducts = await getProducts();
  return allProducts;
}

export default Products;
