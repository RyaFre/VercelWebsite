// components/Loading.js
import styles from '../styles/Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loaderContainer} aria-label="Loading">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
