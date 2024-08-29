import styles from './BlueText.module.css';

type TProps = {
  children: React.ReactNode;
};

export function BlueText({ children }: TProps) {
  return <span className={styles.blue_text}>{children}</span>;
}
