import { Slot, Slottable } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import style from './Button.module.css';

export type TButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type TButton = {
  asChild?: boolean;
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  children?: React.ReactNode;
} & TButtonProps;

export const Button = forwardRef<HTMLButtonElement, TButton>(
  (
    {
      asChild = false,
      appearance = 'primary',
      size = 'lg',
      leftElement = '',
      rightElement = '',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        {...rest}
        ref={ref}
        className={`${style.button} ${style[appearance]} ${style[size]} ${className}`}
      >
        {leftElement}
        <Slottable>{children}</Slottable>
        {rightElement}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
