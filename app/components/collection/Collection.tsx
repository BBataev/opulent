import { coats } from "@/data/images";
import Image from "next/image";

import style from "./style.module.scss";

import Magnetic from "../magnetic/magnetic";



export const Collection = () => {
    return (
        <section className={style.collection}>
            <h2 className={style.collection__title}>
                JUST DROPPED COLLECTION
            </h2>
            <div className={style.collection_coats} data-scroll data-scroll-speed="-0.03">
            {
                coats.map((coat, index) => (
                    <Image
                        className={style.collection_coats__coat}
                        src={coat}
                        key={index}
                        alt="Exclusive coats"
                        draggable="false"
                    >
                    </Image>
                ))
            }
            </div>
            <Magnetic data-scroll data-scroll-speed="-0.1">
                <button className={style.collection__btn}>
                    SEE MORE DROPS
                </button>
            </Magnetic>
        </section>
    )
}