import styles from "./card.module.css"
import { AiOutlineHeart } from "react-icons/ai"

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {

    const subCat = item?.attributes.sub_categories.data.map((item) => item.attributes.title)

    return (
        <div className={styles.card} >
            <div className={styles.imgContainer}>
                <img className={styles.img} src={import.meta.env.VITE_APP_UPLOAD_URL + item?.attributes.img.data[0].attributes.formats.medium.url} alt={item?.attributes.title} />
            </div>

            <div className={styles.infoContainer} >
                <span className={styles.name}>{item?.attributes.title.lenght >= 10 ? item?.attributes.title.slice(0, 15) : item?.attributes.title}</span>
                <span className={styles.subcat}>{subCat}</span>
                <span className={styles.span}>₹ {item?.attributes.price} /-</span>
            </div>
        </div>
    )
}

export default Card