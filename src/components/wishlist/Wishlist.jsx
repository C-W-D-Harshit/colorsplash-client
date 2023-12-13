import styles from "./wishlist.module.css"
import { useAppContext } from "../../context/Context"
import currencyFormatter from 'currency-formatter';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer"
import { removeWishlist } from "../../redux/wishlistReducer"
import { AiOutlineDelete } from "react-icons/ai"
import { CiHeart } from "react-icons/ci";
import emptyWishlist from "../../assets/undraw_wishlist_re_m7tv.svg"
import {Link} from "react-router-dom"

const Wishlist = () => {
    const { isLoading } = useAppContext()
    const wishlists = useSelector(state => state.wishlist.wishlists)
    const dispatch = useDispatch()
    const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL
    if (isLoading) {
        return <h1>Loading.....!</h1>
    }

    if (wishlists.length === 0) {
        return (
            <div className={`${styles.noItems} mt-4`}>

                <img className={styles.eimg} src={ emptyWishlist} alt="Your Wishlist is empty and sad" />
                <div className={styles.textContainer}>
                    <h1>Your Wishlist is empty and sad {':('}</h1>
                    <p>Add something to make it happy!</p>
                </div>

                <div className='mt-3'>
                    <Link to='/' className={`  ${styles.btn} ${styles.addToCartBtn}`}>Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h1 className={`flex items-center gap-3  font-medium text-2xl ${styles.heading}`}>Your Wishlist <CiHeart className={styles.icon} />({wishlists.length}) </h1>
            <div className={styles.mtable}>
                {wishlists.map((item) => {

                    const { id, img, name, color, size, shipping, price, quantity } = item
                    const priceInr = currencyFormatter.format(price, { code: 'INR' });
                    const shippingInr = currencyFormatter.format(shipping, { code: 'INR' });
                    const price_quantity = price * quantity
                    const subTotal = price_quantity + shipping
                    const subTotalInr = currencyFormatter.format(subTotal, { code: 'INR' });

                    const addtocart = () => {
                        dispatch(addToCart({
                            id: item?.id,
                            name: item?.name,
                            img: item?.img,
                            color: item?.color,
                            size: item?.size,
                            stock: item?.stock,
                            shipping: item?.shipping,
                            price: item?.price,
                            quantity: quantity
                        }))
                    }
                    return (
                        <div className={styles.card} key={id}>
                            <div className={styles.cardInfo}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.img} src={imgUrl + img} alt={name} />
                                </div>

                                <div className={styles.info_container}>
                                    <strong className={styles.spanHeading}>{name}</strong>
                                    <div className={styles.infoContainer} >

                                        <div className=' grid gap-3 '>
                                            <span>color: {color}</span>
                                            <span>size: {size}</span>
                                        </div>

                                        <div className=' grid gap-3 '>
                                            <span>shipping: {!isNaN(shipping) && null}{shippingInr}</span>
                                            <span>price: {priceInr}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.action} >
                                <div>
                                    <button onClick={() => dispatch(removeWishlist(id))} className={styles.rbtn}>
                                        <AiOutlineDelete />
                                    </button>
                                    {/* <button className={`${styles.btn} ${styles.addToCartBtn}`} onClick={addtocart}  ><AiOutlineShoppingCart /> Add to cart</button> */}
                                </div>

                                <div>
                                    <button className={` flex items-center gap-3 ${styles.btn} ${styles.addToCartBtn}`} onClick={addtocart}  ><AiOutlineShoppingCart /> Add to cart</button>
                                </div>
                                {/* <div className={styles.priceContainer}>
                                    Sub Total:
                                    <span> {subTotalInr} </span>
                                </div> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Wishlist