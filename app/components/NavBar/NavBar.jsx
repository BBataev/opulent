import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Link from "next/link";

import Magnetic from "../magnetic/magnetic";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Drop 1",
    href: "/drop-1",
  },
  {
    title: "Drop 2",
    href: "/drop-2",
  },
  {
    title: "Drop 3",
    href: "/drop-3",
  },
  {
    title: "Moderns",
    href: "/moderns",
  },
];

export default function NavBar() {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
              <p>Navigation</p>
          </div>
          
          {navItems.map((data, index) => {
            return (
              <Magnetic>
                <Link key={index} href={data.href}>
                  {data.title}
                </Link>
              </Magnetic>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
