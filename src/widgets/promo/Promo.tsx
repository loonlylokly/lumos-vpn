import { BlueText } from '@/entities/blueText/BlueText';
import { Button } from '@/shared/ui/button/Button';
import { Typography } from '@/shared/ui/typography/Typography';
import Image from 'next/image';

import { Statistics } from '@/widgets/promo/ui/statistics/Statistics';
import { Trusted } from '@/widgets/promo/ui/trusted/Trusted';
import styles from './Promo.module.css';

export function Promo() {
  return (
    <section className={styles.promo}>
      <div className={styles.cta_wrap}>
        <Typography className={styles.title} variant='large_title' asChild>
          <h1>
            Access <BlueText>everything securely</BlueText> with
            <br />
            VPN
          </h1>
        </Typography>
        <div className={styles.img_wrap}>
          <Image
            className={styles.img}
            src='/promo.webp'
            alt='Man is turning on VPN'
            fill
            sizes='100%'
            priority={true}
          />
        </div>
        <Button className={styles.btn_cta}>
          <Typography variant='title_2' asChild>
            <>Get VPN</>
          </Typography>
        </Button>
      </div>
      <Trusted />
      <div className={styles.statistics}>
        <Statistics />
      </div>
      <Typography className={styles.text_capture} variant='body'>
        VPN-your <BlueText>ultimate</BlueText> solution for a private and secure online experience!
      </Typography>
    </section>
  );
}
