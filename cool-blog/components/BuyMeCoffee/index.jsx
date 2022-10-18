import React from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffe = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(styles.buyCoffee, className)}>
        <a
          href="https://google.com"
          target="_blank"
          className={styles.buyCoffeeButton}
          rel="noreferrer"
        >
          Hello!
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffe;
