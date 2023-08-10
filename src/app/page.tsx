import Header from '@/components/Header';
import Main from '@/components/Main';
import styles from './page.module.css';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
