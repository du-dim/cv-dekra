import styles from './Summary.module.css';
import * as content from '../../../const/content';

export const Summary = () => {
  const paths = (text: string) => {
    const arr = text.split(':');
    return [...arr];
  };

  return (
    <div className={styles.container}>
      {content.SUMMARY.map((text, idx) => (
        <div className={styles.content} key={`summary-${idx}`}>
          {paths(text).map((t, i, a) =>
            i === 0 && a.length > 1 ? (
              <b key={`summary-${idx}-${i}`}>{t}</b>
            ) : (
              <span key={`summary-${idx}-${i}`}>{t}</span>
            )
          )}
        </div>
      ))}
    </div>
  );
};
// if (i === 0) (<b key={`summary-${idx}-${i}`}>{t}</b>)
//   else (<span key={`summary-${idx}-${i}`}>{t}</span>)
