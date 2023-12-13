import styles from "./navbar.module.css"
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useAppContext } from "../../context/Context"
import logo from "../../assets/colorlogo.webp"


const Navbar = () => {
    const { toggleMenuFn, user, toggle_Auth_Modal } = useAppContext()
    const products = useSelector(state => state.cart.products)
    const wishlists = useSelector(state => state.wishlist.wishlists)
    const handleClick = () => {
        toggleMenuFn();
    }

    return (
        <div className="flex justify-between p-4 items-center ">
            <div className={styles.logoContainer} >
                <Link to="/">  <img className={styles.logo} src={logo} alt="colorsplash" /></Link>
                <div className={`${styles.menu} gap-5 items-center`}>
                    <div className="flex gap-5 items-center">
                        <Link className={styles.link} to="/products/0">Shop</Link>
                        <Link className={styles.link} to="/products/1">Men</Link>
                        <Link className={styles.link} to="/products/2">Women</Link>
                        <Link className={styles.link} to="/products/3">New Arrivals</Link>
                    </div>
                </div>
            </div>

            <div className={`${styles.iconContainer}  flex items-center gap-3 `} >
                {/* <AiOutlineSearch className={styles.icon} /> */}
                {user &&
                    <Link className=" relative " to="/my_account">
                        {wishlists.length !== 0 ? <span className={styles.cartBubble}>{wishlists.length}</span> : null}
                        <FaRegHeart className={styles.icon} />
                    </Link>
                }

                <Link className="relative " to="/addtocart">
                    {products.length !== 0 ? <span className={styles.cartBubble}>{products.length}</span> : null}
                    <AiOutlineShoppingCart className={styles.icon} />
                </Link>

                {/* <Link className={styles.userIcon} to={`${user ? '/my_account' : '/register'}`}>
                    <AiOutlineUser className={styles.icon} />
                </Link> */}

                {user ? 
                <Link className={styles.userIcon} to='/my_account'>
                    <AiOutlineUser className={styles.icon} />
                </Link> : 
                    <AiOutlineUser onClick={toggle_Auth_Modal} className={styles.icon} />       
                }

                <AiOutlineMenu onClick={handleClick} className={`${styles.icon} ${styles.menuIcon}`} />
            </div>
        </div>
    )
}

export default Navbar