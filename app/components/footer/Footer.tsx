import Link from "next/link";
import style from "./style.module.scss";

export const Footer = () => {
    const nav = [{name: "Drop 1", link: "/drop-1"}, {name: "Drop 2", link: "/drop-2"}, {name: "Drop 3", link: "/drop-3"}, {name: "Moderns", link: "/moderns"}]
    


    return (
        <footer className={style.footer}  data-scroll data-scroll-speed="0.1">
            <div className={style.footer_blockTop}>
                <div className={style.footer_blockTop_logo}>
                    <h2 className={style.footer_blockTop_logo__title}>
                        OPULENT
                    </h2>
                    <p className={style.footer_blockTop_logo__descr}>
                        impress • bless • shine
                    </p>
                </div>
                <div className={style.footer_blockTop_links}>
                    {
                        nav.map((elem, index) => (
                            <Link
                                className={style.footer_blockTop_links__link}
                                key={index}
                                href={elem.link}
                            >
                                {elem.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className={style.footer_blockBottom}>
                <div className={style.footer_blockBottom_container}>
                <h2 className={style.footer_blockBottom__title}>
                    Fiesio Beluchi -- director, designer
                </h2>
                    <div className={style.footer_blockBottom_container_contact}>
                        <div className={style.footer_blockBottom_container_contact_text}>
                            <p>
                                +1 1023 123 42 1
                            </p>
                            <p>
                                Fiero@opulent.com
                            </p>
                            <p>
                                Located in Madrid
                            </p>
                        </div>
                        <h4 className={style.footer_blockBottom_container_contact__copyright}>
                            ALL RIGHTS RESERVED ©
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}