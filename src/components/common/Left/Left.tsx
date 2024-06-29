import { Photo } from '../../UI/Photo';
import styles from './Left.module.css';

export const Left = () => {
  return (
    <div className={styles.container}>
      <Photo />
    </div>
  );
};
