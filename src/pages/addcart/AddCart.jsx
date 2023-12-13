import { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import styles from "./addcart.module.css"
import currencyFormatter from 'currency-formatter';
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart } from "react-icons/ai"
import { Button, Modal } from 'antd';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../redux/cartReducer"
import img from "../../assets/ecartbg.png"
import { useAppContext } from "../../context/Context"
import logo from "../../assets/colorlogo.webp"
import { toast } from 'react-hot-toast'
import emptyCart from "../../assets/undraw_empty_cart_co35.svg"


const AddCart = () => {
    const products = useSelector(state => state.cart.products)
    const { user, toggle_Auth_Modal } = useAppContext()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const totalPrice = products.reduce((accumulator, currentItem) => {
        const itemTotal = currentItem.price * currentItem.quantity;
        return accumulator + itemTotal;
    }, 0);


    const totalShippingPrice = products.reduce((accumulator, item) => {
        return accumulator + (item.shipping === 0 ? 0 : item.shipping);
    }, 0);



    const totalPriceInr = currencyFormatter.format(totalPrice, { code: 'INR' });
    const totalShippingPriceInr = currencyFormatter.format(totalShippingPrice, { code: 'INR' });
    const grandTotal = totalPrice + totalShippingPrice
    const grandTotalInr = currencyFormatter.format(grandTotal, { code: 'INR' });

    const handleIncrement = (itemId) => {
        const item = products.find((item) => item.id === itemId);
        const stock = item ? item.stock : 0;
        const quantity = item ? item.quantity : 0;

        if (quantity < stock) {
            dispatch(addToCart({ id: itemId, quantity: quantity + 1 }));
        } else {
            console.log('Reached maximum stock limit');
        }
    };

    const handleDecrement = (itemId) => {
        const item = products.find((item) => item.id === itemId);
        const quantity = item ? item.quantity : 0;

        if (quantity > 1) {
            dispatch(addToCart({ id: itemId, quantity: quantity - 1 }));
        } else {
            console.log('Minimum quantity reached');
        }
    };


    const handleDownload = async (price) => {
        try {
            const { data: { key } } = await axios.get("http://localhost:1337/api/orders/get_key");
            const { data: { order } } = await axios.post(' http://localhost:1337/api/orders/checkout', { price });
            const options = {
                key: key,
                amount: order.amount,
                currency: "INR",
                name: "colorSplash",
                description: "Test Transaction",
                image: logo,
                order_id: order.id,
                userId: user.id,
                callback_url: `http://localhost:1337/api/orders/verification`,
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    color: "#121212"
                }
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
            toast.success("successfully .....");
        } catch (error) {
            // toast.error(error);
            console.log(error);
        }
    };

    if (products.length === 0) {
        return (
            <div className={styles.noItems}>

                <img className={styles.eimg} src={emptyCart} alt="Your cart is empty and sad" />
                <div className={styles.textContainer}>
                    <h1>Your cart is empty and sad {':('}</h1>
                    <p>Add something to make it happy!</p>
                </div>

                <div className='mt-5'>
                    <Link to='/' className={`  ${styles.btn} ${styles.addToCartBtn}`}>Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
        <section className={styles.sec} >

            {!user && <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
                {!user && <strong className="mt-4 mb-4  leading-relaxed" >Please fill in the fields below and click place order to complete your purchase!
                    Already registered? <Link className="text-blue-700 underline" to="/register"  >Please login here</Link></strong>}
            </div>}

            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className={`flex items-center gap-3  font-medium text-2xl ${styles.heading}`}>Your Cart <AiOutlineShoppingCart /> ({products.length}) </h1>
                    </header>

                    <div className="mt-8">
                        <ul className='space-y-4'>

                            {products.map((item) => {
                                const { id, img, name, color, size, shipping, price, quantity } = item
                                const priceInr = currencyFormatter.format(price, { code: 'INR' });
                                const shippingInr = currencyFormatter.format(shipping, { code: 'INR' });
                                const price_quantity = price * quantity
                                const subTotal = price_quantity + shipping
                                // const subTotalInr = currencyFormatter.format(subTotal, { code: 'INR' });


                                return (
                                    <li key={id} className="flex items-center gap-4">
                                        <img className="h-20 w-20 rounded object-cover" src={imgUrl + img} alt={name} />
                                        <div>
                                            <h3 className="text-base text-gray-900">{name}</h3>

                                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                    <div>
                                                        <dt className="inline text-sm">Size: </dt>
                                                        <dd className="inline text-sm">{size}</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline text-sm">Color: </dt>
                                                        <dd className="inline text-sm">{color}</dd>
                                                    </div>
                                                </div>

                                                <div>
                                                    <dt className="inline text-sm ">Price: </dt>
                                                    <dd className="inline text-sm ">{priceInr}</dd>
                                                </div>

                                                <div>
                                                    <dt className="inline text-sm ">Shipping: </dt>
                                                    <dd className="inline text-sm ">{shippingInr}</dd>
                                                </div>
                                            </dl>
                                        </div>

                                        <div className="flex flex-1 items-center justify-end gap-2">

                                            <div className={styles.action} >
                                                <div className={styles.btns}>
                                                    <button onClick={() => handleDecrement(id)}> <AiOutlineMinus /> </button>
                                                    <span>{quantity}</span>
                                                    <button onClick={() => handleIncrement(id)}> <AiOutlinePlus /> </button>
                                                </div>
                                            </div>

                                            <button onClick={() => dispatch(removeItem(id))} className="text-gray-600 transition hover:text-red-600">
                                                <span className="sr-only">Remove item</span>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <dl className="space-y-0.5 text-sm text-gray-700">
                                    <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd>{totalPriceInr}</dd>
                                    </div>

                                    <div className="flex justify-between">
                                        <dt>Shipping</dt>
                                        <dd>{totalShippingPriceInr}</dd>
                                    </div>


                                    <div className="flex justify-between !text-base font-medium">
                                        <dt>Total</dt>
                                        <dd>{grandTotalInr}</dd>
                                    </div>
                                </dl>

                                {/* <div className="flex justify-end">
                                    <span
                                        className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                            />
                                        </svg>

                                        <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                                    </span>
                                </div> */}

                                <div className="flex justify-end">
                                    {!user ?

                                        <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" to='/check-out ' onClick={toggle_Auth_Modal}>Checkout</button>

                                        :
                                        <Link className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600" to='/check-out'>Checkout</Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCart