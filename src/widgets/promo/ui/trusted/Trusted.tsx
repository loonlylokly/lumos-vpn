import { BlueText } from '@/entities/blueText/BlueText';
import { VenokIcon } from '@/shared/ui/icons/VenokIcon';
import { Typography } from '@/shared/ui/typography/Typography';
import styles from './Trusted.module.css';

export function Trusted() {
  return (
    <div className={styles.trusted}>
      <VenokIcon className={styles.venok_1} />
      <Typography className={styles.text_1} variant='capture'>
        <BlueText>Trusted by</BlueText>
      </Typography>
      <Typography className={styles.text_2} variant='text'>
        <BlueText>50M+ Users</BlueText>
      </Typography>
      <VenokIcon className={styles.venok_2} />
    </div>
  );
}
