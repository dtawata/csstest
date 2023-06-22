import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}>
        <div className={styles.three_top}>Top</div>
        <div className={styles.three_mid}>Mid</div>
        <div className={styles.three_bot}>Bottom</div>
      </div>
    </div>
  );
}
