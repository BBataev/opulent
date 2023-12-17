import Image from "next/legacy/image";
import { logos } from "@/data/images";

import style from "./style.module.scss";

export const Brand = () => {
    return (
        <div className={style.block}>
            {
                logos.map((logo, index) => (
                    <Image className={style.block__image} src={logo} key={index} alt="Brand logo" draggable="false"  data-scroll data-scroll-speed="-0.03"></Image>
                ))
            }
        </div>
    );
}