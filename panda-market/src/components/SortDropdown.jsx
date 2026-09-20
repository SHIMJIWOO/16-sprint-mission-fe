import styles from './SortDropdown.module.scss';

function SortDropdown() {
  return(
    <select className={styles.sort}>
      <option>최신순</option>
      <option>좋아요순</option>
    </select>
  );
}

export default SortDropdown;