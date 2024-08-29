import { BlueText } from '@/entities/blueText/BlueText';
import { Typography } from '@/shared/ui/typography/Typography';
import { Advantages } from '@/widgets/advantages/Advantages';
import { Promo } from '@/widgets/promo/Promo';

import styles from './page.module.css';
import { ChooseName } from '@/widgets/chooseName/ChooseName';

export default function Home() {
  return (
    <main className={styles.main}>
      <Promo />
      <Advantages />
      <Typography className={styles.title} variant='title_2' asChild>
        <h2>
          <BlueText>Millions of people trust us!</BlueText>
        </h2>
      </Typography>
      <ChooseName />
    </main>
  );
}
