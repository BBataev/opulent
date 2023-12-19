"use client"

import { coats } from "@/data/images";
import Image from "next/image";

import style from "./style.module.scss";



export const Collection = () => {
    return (
        <section className={style.collection}>
            <h2 className={style.collection__title}>
                JUST DROPPED COLLECTION
            </h2>
            <div className={style.collection_coats} data-scroll data-scroll-speed="-0.03">
            {
                coats.map((coat, index) => (
                    <div className={style.collection_coats_block__coat} key={index}>
                        <Image
                            className={style.collection_coats_block__coat}
                            src={coat.image}
                            key={index}
                            alt="Exclusive coats"
                            draggable="false"
                        >
                        </Image>
                    </div>
                ))
            }
            </div>
            <button className={style.collection__btn} data-hover={"SEE MORE DROPS"} data-scroll data-scroll-speed="-0.04">
            SEE MORE DROPS
            </button>
        </section>
    )
}