import { useState } from "react";
import styles from "./style.module.scss";
import Magnetic from "../magnetic/magnetic";
import { AnimatePresence } from "framer-motion";
import NavBar from "../NavBar/NavBar";


export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <Magnetic className={styles.dunno}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className={styles.bounds}></div>
        </div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {isActive && <NavBar />}
      </AnimatePresence>
    </div>
  );
};