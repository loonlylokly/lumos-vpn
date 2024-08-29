import { Advantage } from '@/shared/lib/types/common';
import { StarIcon } from '@/shared/ui/icons/StarIcon';
import { Typography } from '@/shared/ui/typography/Typography';

import { BlueText } from '@/entities/blueText/BlueText';
import styles from './AdvantageCard.module.css';

export function AdvantageCard({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className={styles.card}>{children}</div>;
}

function Icon({ children }: { children: string | JSX.Element | JSX.Element[] }) {
  return (
    <div className={styles.icons_wrap}>
      <StarIcon />
      <div className={styles.icon}>{children}</div>
      <StarIcon />
    </div>
  );
}

function Text({ advantage }: { advantage: Advantage }) {
  return (
    <div className={styles.text}>
      <Typography variant='title_1' className={styles.keyWord}>
        {advantage.keyWord}
        <br />
        <BlueText>{advantage.title}</BlueText>
      </Typography>
      <Typography variant='subtitle' className={styles.desc}>
        {advantage.description}
      </Typography>
    </div>
  );
}

AdvantageCard.Icon = Icon;
AdvantageCard.Text = Text;
