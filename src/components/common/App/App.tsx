import { Right } from '../Right';
import { Left } from '../Left';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <Left />
      <Right />
    </div>
  );
};
