import styles from './Presentation.module.css';
import * as content from '../../../const/content';

export const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{content.NAME}</div>
      <div className={styles.profession}>{content.PROFESSION}</div>
    </div>
  );
};
