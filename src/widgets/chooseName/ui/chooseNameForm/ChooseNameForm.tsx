import { BlueText } from '@/entities/blueText/BlueText';
import { Button } from '@/shared/ui/button/Button';
import { RadioButton } from '@/shared/ui/input/RadioButton/RadioButton';
import { Typography } from '@/shared/ui/typography/Typography';
import styles from './ChooseNameForm.module.css';

export function ChooseNameForm() {
  return (
    <form>
      <fieldset className={styles.fieldset}>
        <Typography variant='title_1' asChild>
          <legend className={styles.legend}>
            Choose <BlueText>your name</BlueText>
          </legend>
        </Typography>
        <Typography variant='subtitle' asChild>
          <label className={styles.label}>
            <RadioButton name='name' />
            Gerardo Marchand
          </label>
        </Typography>
        <Typography variant='subtitle' asChild>
          <label className={styles.label}>
            <RadioButton name='name' />
            Sushma Andrade
          </label>
        </Typography>
        <Typography variant='subtitle' asChild>
          <label className={styles.label}>
            <RadioButton name='name' />
            Rose Barnaby
          </label>
        </Typography>
      </fieldset>
      <Button className={styles.submit} type='submit'>
        <Typography variant='title_2' asChild>
          <>Get VPN</>
        </Typography>
      </Button>
    </form>
  );
}
