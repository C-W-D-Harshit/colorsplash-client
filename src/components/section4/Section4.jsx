import { useState, useRef, useEffect } from 'react'
import styles from './section.module.css'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetch from "../../hooks/useFetch"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { toast } from "react-hot-toast"

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Section4 = () => {

    const [wsize, setWsize] = useState(0)
    const [param, setParam] = useState(null)
    const [isthere, setisThere] = useState(false)
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { data, error, loading } = useFetch(`/products?populate=*&filters[categories]%20[id]%20[$eq]=2&pagination[start]=0&pagination[limit]=10`);

    const carousel = useRef()
    const sliderRef = useRef(null);

    const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function resizefn() {
        if (windowSize.innerWidth <= 500) {
            setWsize(1)

            if (data.length > 1) {
                setisThere(true)
            } else {
                setisThere(false)
            }
        }
        if (windowSize.innerWidth >= 500) {
            if (data.length >= 1) {
                setWsize(1)
            } else {
                setWsize(data.length)
            }
            if (data.length > 1) {
                setisThere(true)
            } else {
                setisThere(false)
            }
        }
        if (windowSize.innerWidth >= 700) {
            if (data.length >= 2) {
                setWsize(2)
            } else {
                setWsize(data.length)
            }
            if (data.length > 2) {
                setisThere(true)
            } else {
                setisThere(false)
            }
        }
        if (windowSize.innerWidth >= 1020) {
            if (data.length >= 3) {
                setWsize(3)
            } else {
                setWsize(data.length)
            }

            if (data.length > 3) {
                setisThere(true)
            } else {
                setisThere(false)
            }
        }
        if (windowSize.innerWidth >= 1280) {
            if (data.length >= 4) {
                setWsize(4)
            } else {
                setWsize(data.length)
            }
            if (data.length > 4) {
                setisThere(true)
            } else {
                setisThere(false)
            }
        }
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getParams() {
        data.map((item) => {
            item.attributes.categories.data.map((item) => setParam(item.id))
        })
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        resizefn()
        getParams()
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [getParams, resizefn]);


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: wsize,
        slidesToScroll: 1
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    if (error) {
        toast.error("Somthing went wrong!")
    }


    return (
        <div ref={carousel} className='flex m-4 flex-col gap-5 '>
            <div className={styles.headingContainer} >
                <h1 className=' text-xl font-black'>Categories For Women</h1>
            </div>
            <div className=' relative  '>
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, idx) => (
                        <Link to={`/products/${param}`} className={styles.sliderContainer} key={idx}>
                            <motion.div
                                className={styles.item}
                            >

                                {loading ? <h1>Loading.....</h1> :
                                    <>
                                        {item?.attributes?.img?.data[0] && (
                                            <img
                                                key={idx}
                                                className={styles.img}
                                                src={imgUrl + item.attributes.img.data[0].attributes.formats.medium.url}
                                                alt={item.attributes.img.data[0].name}
                                            />
                                        )}
                                        <strong >{item.attributes.title}</strong>
                                    </>
                                }
                            </motion.div>
                        </Link>
                    ))}
                </Slider>
                {isthere && <div className={styles.btnContainer}>
                    <button onClick={goToPrev}>< AiOutlineArrowLeft /></button>
                    <button onClick={goToNext}><AiOutlineArrowRight /></button>
                </div>}
            </div>


            {/* 
                </motion.div>
            </motion.div> */}
        </div>
    )
}

export default Section4