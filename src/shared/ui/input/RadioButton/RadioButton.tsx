import { TInputProps } from '@/shared/lib/types/ui';
import { forwardRef } from 'react';
import styles from './RadioButton.module.css';

export const RadioButton = forwardRef<HTMLInputElement, TInputProps>(({ ...props }, ref) => (
  <div className={styles.radio}>
    <input
      {...props}
      type='radio'
      className={`${styles.radio_input} ${props.className}`}
      ref={ref}
    />
  </div>
));
