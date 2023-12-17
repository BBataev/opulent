import Image from "next/image"
import background from "@/public/opulent2.png"

import style from "./style.module.scss";

export const Main = () => {
    return (
        <section className={style.section}>
            <Image className={style.section__bgimage} src={background} alt="Девочка" quality={100} layout={"responsive"} placeholder = 'blur'  draggable="false"/>
            <div className={style.section_text}>
                <h1 className={style.section_text__title}>
                    OPULENT
                </h1>
                <p className={style.section_text__descr}>
                    impress • dominate • bless • shine
                </p>
            </div>

        </section>
    )
}