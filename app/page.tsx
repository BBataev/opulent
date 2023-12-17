"use client";

import styles from "./page.module.scss";
import Header from "./components/header/header";
import StickyCursor from "./components/stickyCursor/stickyCursor";
import { useRef } from "react";
import { Main } from "./components/main/Main";

export default function Home() {
  const stickyElement = useRef(null);

  return (
    <div className={styles.main}>
      <Header ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <Main />
    </div>
  );
}
