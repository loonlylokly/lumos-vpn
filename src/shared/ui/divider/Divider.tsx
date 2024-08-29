import styles from './Divider.module.css';

export type TDividerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

export type TDivider = {
  orientation?: 'horizontal' | 'vertical';
} & TDividerProps;

export function Divider({ orientation = 'horizontal', ...props }: TDivider) {
  return <hr className={`${styles.divider} ${styles[orientation]} ${props.className || ''}`} />;
}
