import Header from '@/components/Header';
import Main from '@/components/Main';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
    </main>
  );
}
