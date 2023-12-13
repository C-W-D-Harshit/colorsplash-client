import styles from "./orders.module.css"

import { useAppContext } from "../../context/Context"
import currencyFormatter from 'currency-formatter';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer"
import { removeWishlist } from "../../redux/wishlistReducer"
import { AiOutlineDelete } from "react-icons/ai"
import { CiHeart } from "react-icons/ci";

const Orders = () => {
  const { isLoading } = useAppContext()
  const wishlists = useSelector(state => state.wishlist.wishlists)
  const dispatch = useDispatch()
  const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL
  if (isLoading) {
    return <h1>Loading.....!</h1>
  }


  return (
    <div className={styles.container}>
      <h1 className={`flex items-center gap-3  font-medium text-2xl ${styles.heading}`}>Your  Orders  <CiHeart className={styles.icon} />({wishlists.length}) </h1>
      <div className={styles.mtable}>
        <h1>Orders</h1>
      </div>
    </div>
  )
}

export default Orders