import styls from './Right.module.css';
import { FirstTitle } from '../../UI/FirstTitle';
import { Presentation } from '../../UI/Presentation';
import { Basic } from '../Basic';

export const Right = () => {
  return (
    <div className={styls.container}>
      <Presentation />
      <FirstTitle />
      <Basic />
    </div>
  );
};
