import styles from './Photo.module.css';
import photo from '../../../assets/images/photo.jpg';

export const Photo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.connect}>
        <div className={styles.frame}>
          <img className={styles.photo} src={photo} alt='photo' />
        </div>
        <div className={styles.shadow} />
      </div>
    </div>
  );
};
