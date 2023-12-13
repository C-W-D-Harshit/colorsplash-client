import { useState, useRef, useEffect } from 'react'
import styles from './section.module.css'
import { motion } from "framer-motion"


const Section5 = () => {
    const [width, setWidth] = useState(0)

    const carousel = useRef()

    const data = [
        {
            name: "Savannah Nguyen",
            feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.. ",
            img: "https://xsgames.co/randomusers/avatar.php?g=pixel"
        },
        {
            name: "Floyd Miles",
            feedback: " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            img: "https://xsgames.co/randomusers/avatar.php?g=pixel"
        },
        {
            name: "Ronald Richards",
            feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            img: "https://xsgames.co/randomusers/avatar.php?g=pixel"
        },
        {
            name: "Floyd Miles",
            feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
            img: "https://xsgames.co/randomusers/avatar.php?g=pixel"
        },
    ]

    useEffect(() => {
        const scrollwidth = carousel.current.scrollWidth
        const offsetwidth = carousel.current.offsetWidth
        setWidth(scrollwidth - offsetwidth)
    }, [carousel, width])

    return (
        <div ref={carousel} className='flex m-4 flex-col gap-5 '>
            <div className={styles.headingContainer} >
                <h1 className=' text-xl font-black'>Feedback</h1>
            </div>
            <motion.div ref={carousel} className={styles.carousel} >
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.innerCarousel} >
                    {data.map((item, idx) => (
                        <motion.div className={styles.item} key={idx} >
                            <div className={styles.info}>
                                <img src={item.img} className={styles.pimg} alt={item.name} />
                                <strong>{item.name}</strong>
                            </div>
                            <div>
                                <p className={styles.p}>{item.feedback}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Section5