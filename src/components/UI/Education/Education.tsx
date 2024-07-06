import styles from './Education.module.css';
import * as content from '../../../const/content';
import bntu from '../../../assets/images/logo/BNTU.png';
export const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>EDUCATION</div>
      <div className={styles.item}>
        <div className={styles['logo-text']}>
          <img className={styles.logo} src={bntu} alt={`bntu-img`} />
          <div className={styles['text-block']}>
            <div className={styles.header}>{content.EDUCATION.header}</div>
            <div className={styles.years}>{content.EDUCATION.years}</div>
          </div>
        </div>
        <ul className={styles.content}>
          {content.EDUCATION.about.map((about, i) => (
            <li className={styles.work} key={`bntu-${i}`}>
              {about}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
