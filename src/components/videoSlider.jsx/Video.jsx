import styles from "./video.module.css"
import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import { Carousel } from "react-bootstrap"
import ReactPlayer from "react-player"
import { videoData } from "../../data/data"
import "bootstrap/dist/css/bootstrap.css";
import {
    BsPlayFill,
    BsPause,
    BsFillVolumeMuteFill
} from "react-icons/bs"

import { GoUnmute } from "react-icons/go"

const Video = () => {
    const [play, setPlay] = useState(false)
    const [mute, setMute] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0) // To keep track of the current slide

    const playerRef = useRef(null)

    const handleC = () => {
        setPlay(!play)
        if (playerRef.current) {
            playerRef.current.seekTo(0) // Reset video to start if needed
        }
    }

    const handleSound = () => {
        setMute(!mute)
    }

    const handleSlide = (index) => {
        setCurrentSlide(index)
        setPlay(false)
        if (playerRef.current) {
            playerRef.current.seekTo(0)
        }
    }

    return (
        <div className={styles.container}>

            <Carousel
                slide={true}
                activeIndex={currentSlide}
                onSelect={(index) => handleSlide(index)}
                indicators={false}
            >
                {videoData.map((item, index) => (
                    <Carousel.Item interval={100000000} key={item.name} >

                        <div className=" relative ">
                            {/* <ReactPlayer
                                ref={playerRef}
                                width='100%'
                                pip={true}
                                controls={false}
                                playing={index === currentSlide && play}
                                muted={mute}
                                url={item.value}
                                loop={true}
                            /> */}

                            <ReactPlayer
                                ref={playerRef}
                                width='100%'
                                pip={true}
                                controls={false}
                                playing={index === currentSlide && play}
                                muted={mute}
                                url={index === currentSlide ? item.value : null} // Load video only when it's the current slide
                                loop={true}
                            />

                            <div className={styles.controlls}>
                                <div onClick={handleC} className={styles.palyContainer}>
                                    {play ?
                                        <BsPause className={styles.icon} />
                                        :
                                        <BsPlayFill className={styles.icon} />
                                    }
                                </div>
                                <div onClick={handleSound} className={styles.muteContainer}>
                                    {mute ? <BsFillVolumeMuteFill className={styles.icon} /> :
                                        <GoUnmute className={styles.icon} />
                                    }
                                </div>
                            </div>

                        </div>

                        <Carousel.Caption>
                            <div className={styles.mDiv}>
                                <h1>
                                    LET’S
                                    EXPLORE
                                    <span>UNIQUE</span>
                                    CLOTHES.</h1>
                                <Link to='/products/0' className={styles.btn}>
                                    Shop Now
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Video
