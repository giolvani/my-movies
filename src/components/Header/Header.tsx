import styles from './Header.module.css';
import { useHeader } from '@/hooks/useHeader';
import { Link } from 'react-router-dom';
import arrowLeft from '@/assets/arrow-left.svg';

export default function Header() {
  const { title, showBackButton } = useHeader();

  return (
    <header className={styles.header}>
      {showBackButton && (
        <Link to="/" className={styles.backButton}>
          <img src={arrowLeft} alt="Go to Home" />
        </Link>
      )}
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
