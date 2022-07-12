import styles from './Pagination.module.css';

function Pagination({ next, prev, pageChangeHandler }) {
  return (
    <div className={styles.pagination}>
      <div
        onClick={() => {
          pageChangeHandler(prev);
        }}
        className={!prev ? styles.deactiveBtn : styles.btn}
      >
        {'>'}
      </div>
      <div
        onClick={() => {
          pageChangeHandler(next);
        }}
        className={!next ? styles.deactiveBtn : styles.btn}
      >
        {'<'}
      </div>
    </div>
  );
}
export default Pagination;
