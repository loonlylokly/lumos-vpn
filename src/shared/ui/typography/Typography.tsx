import { Slot, Slottable } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import style from './Typography.module.css';

type TProps = {
  asChild?: boolean;
  variant?:
    | 'LargeTitle'
    | 'Title1'
    | 'Title2'
    | 'Subtitle'
    | 'Body'
    | 'Text'
    | 'Capture'
    | 'Footnote';
  font?: 'work_sans' | 'space_mono';
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Typography = ({
  asChild = false,
  variant = 'Text',
  font = 'work_sans',
  className = '',
  children,
  ...rest
}: TProps) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp {...rest} className={`${style.text} ${style[variant]} ${style[font]} ${className}`}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
