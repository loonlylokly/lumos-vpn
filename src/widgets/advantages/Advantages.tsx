import { advantages } from '@/shared/lib/messages/main';
import { HideIcon } from '@/shared/ui/icons/HideIcon';
import { AdvantageCard } from './ui/AdvantageCard/AdvantageCard';

import styles from './Advantages.module.css';

export function Advantages() {
  return (
    <section className={styles.adventages}>
      {advantages.map((advantage) => (
        <AdvantageCard>
          <AdvantageCard.Icon>
            <HideIcon />
          </AdvantageCard.Icon>
          <AdvantageCard.Text advantage={advantage} />
        </AdvantageCard>
      ))}
    </section>
  );
}
