import { Link } from "react-router-dom"
import styles from "./index.module.css"
import img from "../../assets/confirmed.svg"

const SuccessPage = () => {
    return (
        <div className={styles.container}>
     
                <img className={styles.eimg} src={img} alt="Your cart is empty and sad" />
                <div className={styles.textContainer}>
                    <h1>Your Order is Confirmed {':)'}</h1>
                </div>

                <div className='mt-5'>
                    <Link to='/' className={`  ${styles.btn} ${styles.addToCartBtn}`}>Continue Shopping</Link>
                </div>
  
        </div>
    )
}

export default SuccessPage