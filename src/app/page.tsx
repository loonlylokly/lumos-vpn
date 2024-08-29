import { Advantages } from '@/widgets/advantages/Advantages';
import { Promo } from '@/widgets/promo/Promo';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Promo />
      <Advantages />
    </main>
  );
}
