import { useState, useRef, useEffect } from "react";
import { Carousel } from 'antd';
import { Link, useParams } from 'react-router-dom';
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./product.module.css"
import { Radio } from 'antd';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart } from "react-icons/ai"
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import currencyFormatter from 'currency-formatter';
import useFetch from "../../hooks/useFetch"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer"
import { addToWishlist } from "../../redux/wishlistReducer"
// import { removeWishlist } from "../../redux/wishlistReducer"
// import { useAppContext } from "../../context/Context";
import { SimilarProductsCard } from "../../components/export";
import { PageLoading } from "../../components/export"
import { useSelector } from "react-redux"



const Product = () => {
  const { id } = useParams();
  const [subCat, setSubCat] = useState('')
  const { data, error, loading } = useFetch(`/products/${id}?populate=*`)
  const [size, setSize] = useState('normal');
  const [color, setColor] = useState('normal')
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1)
  const wishlists = useSelector(state => state.wishlist.wishlists)
  const products = useSelector(state => state.cart.products)
  const [wishlistedProduct, setWishlistedProduct] = useState([])
  const [cartProduct, setCartProduct] = useState([])

  // const sliderRef = useRef(null);
  const dispatch = useDispatch()

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  // console.log(products);
  // console.log(data);

  // const goToNext = () => {
  //   sliderRef.current.slickNext();
  // };

  // const goToPrev = () => {
  //   sliderRef.current.slickPrev();
  // };

  const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL

  const radioBtn = [
    {
      name: "Xs",
      value: "Xs"
    },
    {
      name: "S",
      value: "S"
    },
    {
      name: "M",
      value: "M"
    },
    {
      name: "L",
      value: "L"
    },
    {
      name: "XL",
      value: "XL"
    },
  ]

  const colorradioBtn = [
    {
      name: "Black",
      value: "Black",
      color: '#000'
    },
    {
      name: "Yellow",
      value: "Yellow",
      color: '#FFC300'
    },
    {
      name: "Pink",
      value: "Pink",
      color: '#F774FF'
    },
    {
      name: "Red",
      value: "Red",
      color: '#C70039'
    },
  ]

  const addtocart = () => {
    dispatch(addToCart({
      id: data?.id,
      name: data?.attributes?.title,
      img: data?.attributes?.img.data[0]?.attributes.formats.small.url,
      color: color,
      size: size,
      stock: data?.attributes?.stock,
      shipping: data?.attributes?.shipping,
      price: data?.attributes?.price,
      quantity: quantity
    }))
  }


  const addWishlist = () => {
    dispatch(addToWishlist({
      id: data?.id,
      name: data?.attributes?.title,
      img: data?.attributes?.img.data[0]?.attributes.formats.small.url,
      color: color,
      size: size,
      stock: data?.attributes?.stock,
      shipping: data?.attributes?.shipping,
      price: data?.attributes?.price,
      quantity: quantity
    }))
  }


  const handleIncrement = () => {
    setQuantity(quantity + 1)
    if (quantity >= data?.attributes?.stock) {
      setQuantity(quantity);
    }
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  const price = currencyFormatter.format(data?.attributes?.price, { code: 'INR' });


  useEffect(() => {
    data?.attributes?.sub_categories?.data.map((item) => (
      setSubCat(item.attributes.title)
    ))

    wishlists.map((item) => setWishlistedProduct(item))
    products.map((item) => setCartProduct(item))
  }, [data, wishlists, products, wishlistedProduct, cartProduct])


  if (loading) {
    return <PageLoading />
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>

        <Carousel initialSlide={currentSlide} >
          {data?.attributes?.img?.data.map((item, idx) => (
            <div key={idx}>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={imgUrl + item?.attributes?.formats?.medium?.url} alt="img" />
                <div style={{ backgroundImage: `url(${imgUrl + item?.attributes?.formats?.medium?.url})` }} className={styles.imgBgContainer}></div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className={styles.infoContainer} >
          <h1 className={styles.heading}>{data?.attributes?.title}</h1>

          <div className={styles.descContainer}>
            <span className={styles.descHeading}>Description</span>
            <p className={styles.desc}>{data?.attributes?.desc}</p>
          </div>

          <div className=" grid gap-10 p-4 " >
            <div className={styles.radioContainerGroup}>
              {
                data?.attributes?.size ? <div className={styles.radioContainer}>
                  <strong className={styles.strong}>Select Size</strong>
                  <Radio.Group buttonStyle="solid" onChange={(e) => setSize(e.target.value)} defaultValue={size}>
                    {radioBtn.map((item, idx) => (
                      <Radio.Button key={idx} value={item.value}>{item.name}</Radio.Button>
                    ))}

                  </Radio.Group>
                </div>

                  : <div>
                    <h1>No Size
                      available</h1>
                  </div>
              }


              {
                data?.attributes?.color ?

                  <div className={styles.radioContainer}>
                    <strong className={styles.strong}>Colours Available </strong>
                    <Radio.Group buttonStyle="solid" className={styles.radioGroup} onChange={(e) => setColor(e.target.value)} defaultValue={color}>
                      {colorradioBtn.map((item, idx) => (
                        <Radio.Button style={idx === item ? { backgroundColor: '#000' } : { backgroundColor: `${item.color}` }} className={styles.radioBtn} key={idx} value={item.value}>{item.name}</Radio.Button>
                      ))}
                    </Radio.Group>
                  </div>
                  : <div><h1>no Color options availabel</h1></div>
              }
            </div>

            <div className="grid gap-3">
              <strong className={styles.strong}>Quantity </strong>
              <div className={styles.btns}>

                <button onClick={handleDecrement}> <AiOutlineMinus /> </button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}> <AiOutlinePlus /> </button>
              </div>
            </div>

            <div className={styles.priceContainer} >
              <h2 className={styles.priceTitle}>{price}</h2>
            </div>
          </div>


          <div className={
            styles.checkOutContainer
          } >

            {
              cartProduct.id === data.id ?
                <Link to="/addtocart" className={`${styles.btn} ${styles.addToCartBtn}`}>
                  <AiOutlineShoppingCart /> Go to cart</Link>
                :
                <button onClick={addtocart} className={`${styles.btn} ${styles.addToCartBtn}`}>
                  <AiOutlineShoppingCart /> Add to cart</button>
            }

            {wishlistedProduct.id === data.id ?
              <Link to="/my_account" className={`${styles.btn} ${styles.addToCartBtn}`}>
              <IoMdHeart /> Go to Wishlist</Link>
              :
              <button onClick={addWishlist} className={`${styles.btn} ${styles.addToCartBtn}`}>
              <IoIosHeartEmpty /> Add to Wishlist</button>
            }

          </div>
        </div>
      </div>

      <div className={styles.recommendtions} >
        <SimilarProductsCard title={subCat} />
      </div>
    </div>
  )
}

export default Product