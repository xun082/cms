import React, { FC } from "react";
import welcome from "@/assets/images/welcome.png";
import styles from "./index.module.scss";

const Home: FC = () => {
  return (
    <div className={styles.root}>
      <img src={welcome} alt="welcome" />
    </div>
  );
};

export default Home;
