import styles from './Pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button className={styles.arrow}>{'<'}</button>
      <button className={`${styles.page} ${styles.active}`}>1</button>
      <button className={styles.page}>2</button>
      <button className={styles.page}>3</button>
      <button className={styles.page}>4</button>
      <button className={styles.page}>5</button>
      <button className={styles.arrow}>{'>'}</button>
    </div>
  );
}

export default Pagination;