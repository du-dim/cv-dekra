/* eslint-disable @typescript-eslint/ban-types */
import { Right } from '../Right';
import { Left } from '../Left';
import styles from './Print.module.css';
import { forwardRef, RefObject } from 'react';

export const Print = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={styles.container} ref={ref}>
      <Left />
      <Right />
    </div>
  );
});
