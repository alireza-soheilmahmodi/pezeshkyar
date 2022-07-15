import styles from './Pagination.module.css';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
function Pagination({ next, prev, pageChangeHandler }) {
  return (
    <div className={styles.pagination}>
      <div
        onClick={() => {
          prev && pageChangeHandler(prev);
        }}
        className={!prev ? styles.deactiveBtn : styles.btn}
      >
        <BsChevronLeft />
      </div>
      <div
        onClick={() => {
          next && pageChangeHandler(next);
        }}
        className={!next ? styles.deactiveBtn : styles.btn}
      >
        <BsChevronRight />
      </div>
    </div>
  );
}
export default Pagination;
