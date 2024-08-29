import { Logo } from '@/entities/logo/Logo';

import { Button } from '@/shared/ui/button/Button';
import { Typography } from '@/shared/ui/typography/Typography';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Button size='md' appearance='secondary'>
        <Typography variant='text'>Get VPN</Typography>
      </Button>
    </header>
  );
}
