import styles from './BestProductSection.module.scss';
import ProductCard from './ProductCard';

function BestProductSection() {
  return(
    <section className={styles.section}>
      <div className="container">
        <h2>베스트 상품</h2>
        <div className={styles.grid}>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
      </div>
    </section>
  );
}

export default BestProductSection;