import { useState, useRef, createRef } from "react"
import styles from "./section.module.css"
import img from "../../assets/img.svg"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import Video from "../videoSlider.jsx/Video";
import ReactPlayer from 'react-player'
import {
    BsPlayFill,
    BsPause,
    BsFillVolumeMuteFill
} from "react-icons/bs"

import { GoUnmute } from "react-icons/go"



const Section = () => {
    const [unMute, setUnMute] = useState(true)
    const [paly, setPaly] = useState(true)


    const sliderRef = useRef(null);
    const myRef = useRef(null);



    const handlePlay = () => {
        setPaly(!paly)
        if (paly) {
            myRef.current.play()
        } else {
            myRef.current.pause()
        }
        console.log(myRef.current);
    }

    const handleSound = () => {
        setUnMute(!unMute)
    }

    var settings = {
        infinite: true,
        speed: 500,
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <div className={`${styles.container}`}>
                <div className={styles.infoImgContainer} >
                    <Video />
                </div>


                <div className={styles.dContainer}>
                    <div className={styles.infocontainer}>
                        <h1>
                            LET’S
                            EXPLORE
                            <span>UNIQUE</span>
                            CLOTHES.</h1>
                        <p className="text-base text-gray-900 font-medium">Live for Influential and Innovative fashion!</p>
                        <Link to='/products/0' className={styles.btn}>
                            Shop Now
                        </Link>
                    </div>

                    <Video />

                </div>
            </div>

            <div className={styles.brands}>
                <ul className="flex items-center my-6 ">
                    <li><img className={styles.bimg} src={img1} alt="1" /></li>
                    <li><img className={styles.bimg} src={img2} alt="2" /></li>
                    <li><img className={styles.bimg} src={img3} alt="3" /></li>
                    <li><img className={styles.bimg} src={img4} alt="4" /></li>
                    <li><img className={styles.bimg} src={img5} alt="5" /></li>
                    <li><img className={styles.bimg} src={img6} alt="6" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Section