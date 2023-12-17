import Image from "next/legacy/image"
import background from "@/public/opulent2.png"

import style from "./style.module.scss";

export const Main = () => {
    return (
        <section className={style.section}>
            <Image className={style.section__bgimage} src={background} alt="Девочка" quality={100} layout={"responsive"} placeholder = 'blur' draggable="false"/>
            <div className={style.section_text} data-scroll data-scroll-speed="-0.07">
                <h1 className={style.section_text__title}>
                    OPULENT
                </h1>
                <p className={style.section_text__descr}>
                    impress • bless • shine
                </p>
            </div>
        </section>
    )
}