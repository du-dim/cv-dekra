import styles from './Skills.module.css';
import * as content from '../../../const/content';

export const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>SKILLS</div>
      <div className={styles.list}>
        {content.SKILLS.map((element, idx) => (
          <div className={styles.content} key={`skills-${idx}`}>
            <div className={styles.header}>{element.header}</div>
            <div className={styles.item}>
              {element.list.map((item, i) => (
                <div className={styles.text} key={`skills-${idx}-${i}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
