import styles from './ProductCard.module.scss';

function ProductCard() {
  return(
    <div className={styles.card}>
      <img src="https://static.mercdn.net/item/detail/orig/photos/m64126375987_1.jpg?1779991877" alt="상품 이미지" />
      <p className={styles.name}>빈 병</p>
      <p className={styles.price}>500원</p>
      <p className={styles.likes}>♡ 240</p> 
    </div>
  );
}

export default ProductCard;