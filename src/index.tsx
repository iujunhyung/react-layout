import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export function ReactLayout({ children }: any) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    setTime(10);
  }, []);

  return (
    <div className={styles.root}>
      {children}
      <span>{time} aaadd dd</span>
    </div>
  );
}