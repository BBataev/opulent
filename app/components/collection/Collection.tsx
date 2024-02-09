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
                    <div className={style.collection_coats_blockCoat} key={index}>
                        <Image
                            className={style.collection_coats_blockBrand__brand}
                            src={coat.url}
                            key={index+1}
                            alt="Coat brand"
                            draggable="false"
                            placeholder = 'empty'
                        >
                        </Image>
                        <Image
                            className={style.collection_coats_blockCoat__coat}
                            src={coat.image}
                            key={index+2}
                            alt="Exclusive coats"
                            draggable="false"
                            placeholder = 'empty'
                        >
                        </Image>
                        <div className={style.collection_coats_blockCoat_info} key={index+3}>
                            <div className={style.collection_coats_blockCoat_info_text}>
                                <p className={style.collection_coats_blockCoat_info_text__descr}>
                                    {coat.info}
                                </p>
                            </div>
                            <div className={style.collection_coats_blockCoat_info_cost}>
                                <p className={style.collection_coats_blockCoat_info_cost__descr}>
                                    Price: {coat.cost}
                                </p>
                            </div>
                        </div>
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