import styles from './Contacts.module.css';
import { ReactComponent as IconLocation } from '../../../assets/icons/location.svg';
import { ReactComponent as IconEmail } from '../../../assets/icons/email.svg';
import { ReactComponent as IconPhone } from '../../../assets/icons/phone.svg';
import * as content from '../../../const/content';

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CONTACTS</div>
      <div className={styles.list}>
        <div className={styles.item}>
          <IconLocation className={styles.icon} />
          <div className={styles.text}>{content.LOCATION}</div>
        </div>
        <div className={styles.item}>
          <IconEmail className={styles.icon} />
          <div className={styles.text}>{content.EMAIL}</div>
        </div>
        <div className={styles.item}>
          <IconPhone className={styles.icon} />
          <div className={styles.text}>{content.PHONE}</div>
        </div>
      </div>
    </div>
  );
};
