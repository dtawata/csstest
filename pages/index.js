import styles from '../styles/Home.module.css'
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [css, setCss] = useState(`${styles.container}`);

  const changeCss = () => {
    if (css === `${styles.container}`) setCss(`${styles.container} ${styles.active}`);
    else setCss(`${styles.container}`);
  };

  return (
    <div className={css}>
      <div className={styles.one}>one</div>
      <div className={styles.two}>two</div>
      <div onClick={changeCss} className={styles.three}>
        <div className={styles.three_top}>Top</div>
        <div className={styles.three_mid}>Mid</div>
        <div className={styles.three_bot}>Bottom</div>
      </div>
    </div>
  );
}
