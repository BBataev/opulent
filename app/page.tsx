"use client";

import styles from "./page.module.scss";
import Header from "./components/header/header";
import StickyCursor from "./components/stickyCursor/stickyCursor";
import { useEffect, useRef } from "react";
import { Main } from "./components/main/Main";
import { Brand } from "./components/brand/brand";

export default function Home() {
  const stickyElement = useRef(null);

  useEffect( () => {
    (
      async() => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <>
      <StickyCursor stickyElement={stickyElement} />

      <div className={styles.main}>
        <Header ref={stickyElement} />
        <Main />
        <Brand/>
      </div>
    </>
  );
}
