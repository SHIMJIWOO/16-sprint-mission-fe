import styles from './ProductList.module.scss';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className={styles.grid}>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  );
}

export default ProductList;