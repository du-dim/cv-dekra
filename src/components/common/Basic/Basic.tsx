import { Education } from '../../UI/Education';
import { Experience } from '../../UI/Experience';
import { Summary } from '../../UI/Summary';
import styls from './Basic.module.css';

export const Basic = () => {
  return (
    <div className={styls.container}>
      <Summary />
      <Education />
      <Experience />
    </div>
  );
};
