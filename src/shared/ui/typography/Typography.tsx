import { Slot, Slottable } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import style from './Typography.module.css';

type TProps = {
  asChild?: boolean;
  variant?:
    | 'large_title'
    | 'title_1'
    | 'title_2'
    | 'subtitle'
    | 'body'
    | 'text'
    | 'capture'
    | 'footnote';
  font?: 'poppins';
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Typography = ({
  asChild = false,
  variant = 'text',
  font = 'poppins',
  className = '',
  children,
  ...rest
}: TProps) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp {...rest} className={`${style[variant]} ${style[font]} ${className}`}>
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
