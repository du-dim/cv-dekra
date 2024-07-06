/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Experience.module.css';
import * as content from '../../../const/content';
import bern from '../../../assets/images/logo/bern.png';
import dekra from '../../../assets/images/logo/dekra.png';
import rs from '../../../assets/images/logo/rs_school.png';
import { ExperinceType } from '../../../type/type';

export const Experience = () => {
  const logoImg = {
    bern: bern,
    dekra: dekra,
    rs: rs,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>EXPERIENCE</div> {/* Исправлена опечатка */}
      <div className={styles.list}>
        {content.EXPERIENCE.map((experience: ExperinceType, idx: number) => (
          <div key={`experience-${idx}`} className={styles.item}>
            <div className={styles['logo-text']}>
              <img
                className={styles.logo}
                src={logoImg[experience.logo]}
                alt={`${experience.logo}-img`}
              />
              <div className={styles['text-block']}>
                <div className={styles.header}>{experience.header}</div>
                <div className={styles.years}>{experience.years}</div>
              </div>
            </div>
            <ul className={styles.content}>
              {experience.work.map((work, i) => (
                <li className={styles.work} key={`work-${idx}-${i}`}>
                  {work}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
