import { useState, useRef, useEffect } from "react";
import styles from "./sidebarnav.module.css"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"
import { useAppContext } from "../../context/Context";
import { IoIosArrowDown } from "react-icons/io"


const SidebarNav = () => {
    const { toggleMenu, toggleMenuFn, user } = useAppContext()
    const [height, setHeight] = useState(0)
    const [height1, setHeight1] = useState(0)


    const handleClick = () => {
        if (height >= 49 || height === 0) {
            setHeight(245)
        }
        if (height >= 244) {
            setHeight(50)
        }

    }

    const handleClick2 = () => {
        if (height1 >= 49 || height1 === 0) {
            setHeight1(240)
        }
        if (height1 >= 240) {
            setHeight1(50)
        }
    }


    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden";
            document.body.style.overflowX = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.overflowX = "hidden";

        }

        document.addEventListener("click", handleEvent, true);
        return () => {
            document.removeEventListener("click", handleEvent, true);
        };
    }, [toggleMenu]);

    const refOne = useRef(null);

    const handleEvent = (e) => {
        if (!refOne.current.contains(e.target)) {
            return;
        } else {
            !toggleMenuFn();
        }
    };

    return (
        <div className={styles.container}>
            <div ref={refOne} className={`${toggleMenu ? `${styles.showBg}  ${styles.bg}` : `${styles.bg}`}`}></div>
            <div className={`${toggleMenu ? `${styles.showsidebar}  ${styles.sidebar}` : `${styles.sidebar}`}`}>
                <div className={styles.nav} >
                    <div className={styles.closeContainer} >
                        <AiOutlineClose onClick={toggleMenuFn} className={styles.icon} />
                        <h1 className=" text-slate-50">Logo</h1>

                    </div>
                </div>
                <div className={styles.menu} >
                    <div className={styles.ul}>
                        <Link onClick={toggleMenuFn} className={styles.link} to="/">Home</Link>


                        <div onClick={handleClick} className={styles.accordon} style={{ height: `${height === 0 ? 50 : height}px` }}>
                            <div className={styles.accordonText}>
                                <span> Explore</span>
                                <IoIosArrowDown className={styles.icon} />
                            </div>

                            <div className={styles.menuLink}>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/products/0">Shop</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/products/1">Men</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/products/2">Women</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/products/3">New Arrivals</Link>
                                {/* <Link onClick={toggleMenuFn} className={styles.link} to="/products/combos">Combos</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/products/Joggers">Joggers</Link> */}
                            </div>
                        </div>



                        <div onClick={handleClick2} className={styles.accordon} style={{ height: `${height1 === 0 ? 50 : height1}px` }}>
                            <div className={styles.accordonText}>
                                <span> Legal</span>
                                <IoIosArrowDown className={styles.icon} />
                            </div>

                            <div className={styles.menuLink}>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/privacy_policy">Privacy Policy</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/Terms_&_Conditions">Terms & Conditions</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/cookie_policy">Cookie Policy</Link>
                                <Link onClick={toggleMenuFn} className={styles.link} to="/exchange_policy">Exchange Policy</Link>
                            </div>
                        </div>

                        <Link onClick={toggleMenuFn} className={styles.link} to="/about-us">About Us</Link>
                        <Link onClick={toggleMenuFn} className={styles.link} to="/contact-us">Contact Us</Link>
                    </div>
                </div>
                {!user &&
                    <div className={styles.authBtnContainer}>
                        <Link to="/register" onClick={toggleMenuFn} className={styles.btn}>Log In</Link>
                    </div>}
            </div>
        </div>
    )
}

export default SidebarNav