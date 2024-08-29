import { Divider } from '@/shared/ui/divider/Divider';
import { ServerIcon } from '@/shared/ui/icons/ServerIcon';
import { Typography } from '@/shared/ui/typography/Typography';

import styles from './Statistics.module.css';

export function Statistics() {
  return (
    <div className={styles.statistics}>
      <div className={styles.locations}>
        <ServerIcon />
        <div className={styles.text_wrap}>
          <Typography className={styles.number} variant='title_2'>
            1000+
          </Typography>
          <Typography variant='capture'>Servers</Typography>
        </div>
      </div>
      <Divider className={styles.divider} orientation='vertical' />
      <div className={styles.servers}>
        <ServerIcon />
        <div className={styles.text_wrap}>
          <Typography className={styles.number} variant='title_2'>
            50+
          </Typography>
          <Typography variant='capture'>Servers</Typography>
        </div>
      </div>
    </div>
  );
}
