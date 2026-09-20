import styles from './ProductSection.module.scss';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import ProductList from './ProductList';
import Pagination from './Pagination';


function ProductSection() {
  return(
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
         <h2>판매 중인 상품</h2>
          <div className={styles.toolbar}>
           <SearchBar/>
           <button className={styles.registerButton}>상품 등록하기</button>
           <SortDropdown/>
          </div>
        </div>
        <ProductList />
        <Pagination />
      </div>
    </section>
  );
}


export default ProductSection;