import styles from './SearchBar.module.scss';

function SearchBar() {
  return(
    <input 
    type="text"
    className={styles.search}
    placeholder='검색할 상품을 입력해주세요' 
    />
  );
}


export default SearchBar;