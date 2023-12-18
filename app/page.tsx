"use client";

import style from "./page.module.scss";
import { useEffect } from "react";

import { Header } from "./components/header/header";
import { Main } from "./components/main/Main";
import { Brand } from "./components/brand/brand";
import { Collection } from "./components/collection/Collection";
import { About } from "./components/about/About";

export default function Home() {
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
      <div className={style.main}>
        <Header />
        <Main />
        <Brand/>
        <Collection />
        <About />
      </div>
    </>
  );
}
