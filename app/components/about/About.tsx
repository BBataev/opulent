import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./anim";

import style from "./style.module.scss";

export const About = () => {
  const phrase1 = "ABOUT OPULENT";
  const phrase2 =
    "OPULENT AIMS TO REDEFINE THE MODERN WARDROBE BY OFFERING EDITED COLLECTIONS THAT SEAMLESSLY BLEND LUXURY WITH EVERYDAY STYLE, SPANNING ADIVERSE RANGE OF CATEGORIES AND STYLES. BY COLLABORATING WITH ICONIC BRANDS AND GLOBAL DESIGNERS, WE HOPE THAT OPULENT WILL BE A PLATFORM THAT DELIVERS ACCESS TO INCREDIBLE FASHION FOR EVERYONE.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section className={style.about}>
      <div
        className={style.lol}
        ref={description}
        data-scroll
        data-scroll-speed="-0.07"
      >
        <h2 className={style.about__title}>
          {phrase1.split(" ").map((word, index) => {
            return (
              <span key={index} className={style.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </h2>
        <p className={style.about__descr}>
          {phrase2.split(" ").map((word, index) => {
            return (
              <span key={index} className={style.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
