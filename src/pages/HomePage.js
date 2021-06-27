import React from "react";

import useWindowDimensions from "../hooks/windowDimensions";
import styles from "../styles/css/pages/homePage.module.css";

const HomePage = () => {
  const { isPerfect } = useWindowDimensions();

  return (
    <section id={styles.main}>
      <div id={styles.title}>
        <h1>Your OneStop shop</h1>
        <p>Everything from furniture to home appliances, all in one place.</p>

        <button id={styles.explore}>Explore</button>
      </div>
    </section>
  );
};

export default HomePage;
