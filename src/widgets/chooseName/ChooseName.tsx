import styles from './ChooseName.module.css';
import { ChooseNameForm } from './ui/chooseNameForm/ChooseNameForm';

export function ChooseName() {
  return (
    <section className={styles.choose_name}>
      <ChooseNameForm />
    </section>
  );
}
