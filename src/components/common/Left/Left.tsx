import { Contacts } from '../../UI/Contacts';
import { Photo } from '../../UI/Photo';
import { Skills } from '../../UI/Skills';
import styles from './Left.module.css';

export const Left = () => {
  return (
    <div className={styles.container}>
      <Photo />
      <Contacts />
      <Skills />
    </div>
  );
};
