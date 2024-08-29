import { LogoIcon } from '@/shared/ui/icons/LogoIcon';
import { Typography } from '@/shared/ui/typography/Typography';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <Typography variant='subtitle'>VPN</Typography>
    </div>
  );
}
