import React  from "react";

import useWindowDimensions from "../hooks/windowDimensions";
import styles from "../styles/css/pages/homePage.module.css";

const HomePage = () => {
  const { isPerfect } = useWindowDimensions();

  return (
    <section id={styles.main}>
    </section>
  );
};

export default HomePage;
