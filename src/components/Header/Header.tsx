import styles from './Header.module.css';
import { useHeader } from '@/hooks/useHeader';

export default function Header() {
  const { title } = useHeader();
  
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
