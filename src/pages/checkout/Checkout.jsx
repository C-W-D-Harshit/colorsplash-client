import styles from "./checkout.module.css"
import { useState } from "react";
import currencyFormatter from 'currency-formatter';
import { useSelector } from "react-redux"

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Flex,
  Space
} from 'antd';
import { data } from "../../data/data"
import { useAppContext } from "../../context/Context"

const Checkout = () => {
  const products = useSelector(state => state.cart.products)
  const { user } = useAppContext()
  const [componentSize, setComponentSize] = useState('default');
  const [selectedState, setSelectedState] = useState('')
  const [value, setValue] = useState(1);
  const imgUrl = import.meta.env.VITE_APP_UPLOAD_URL

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



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.state = selectedState
    // console.log(data);
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (value) => {
    setSelectedState(value)
  };

  return (
    <div className="p-3">
      <h1 className={`flex items-center gap-3  font-medium ${styles.heading}`}>Check Out</h1>
      <strong className="font-medium text-lg mt-4 mb-4">Billing Details</strong>


      <div className={` items-baseline p-3 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  mt-4 mb-4`}>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4 lg:col-span-2 ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-3">
              <label htmlFor="First_Name" className={styles.label}>
                First Name
              </label>

              <input
                type="text"
                id="First_Name"
                name="firstname"
                placeholder="First Name"
                className={styles.input}
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="Last_Name" className={styles.label}>
                Last Name
              </label>

              <input
                type="text"
                id="Last_Name"
                name="lastname"
                placeholder="Last Name"
                className={styles.input}
                required
              />
            </div>
          </div>


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-3">
              <label htmlFor="CountryRegion" className={styles.label}>
                Country / Region
              </label>

              <input
                type="text"
                id="CountryRegion"
                name="CountryRegion"
                placeholder="Country / Region"
                className={styles.input}
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="CompanyName" className={styles.label}>
                Company Name
              </label>

              <input
                type="text"
                id="CompanyName"
                name="CompanyName"
                placeholder="Company (optional)"
                className={styles.input}
              />
            </div>
          </div>


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-3">
              <label htmlFor="StreetAddress" className={styles.label}>
                Street Address
              </label>

              <input
                type="text"
                id="StreetAddress"
                name="StreetAddress"
                placeholder="House number and street name"
                className={styles.input}
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="Aptsuiteunit" className={styles.label}>
                Apt, suite, unit
              </label>

              <input
                type="text"
                id="Aptsuiteunit"
                name="Aptsuiteunit"
                placeholder="apartment, suite, unit, etc. (optional)"
                className={styles.input}

              />
            </div>
          </div>



          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-3">
              <label htmlFor="City" className={styles.label}>
                City
              </label>

              <input
                type="text"
                id="City"
                name="town_city"
                placeholder="Town / City"
                className={styles.input}
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="State" className={styles.label}>
                State
              </label>

              <Select onChange={handleChange} placeholder='State' >
                {data.map((item, idx) => (
                  <Select.Option key={idx} value={item.value}>{item.name}</Select.Option>
                ))}
              </Select>
            </div>

          </div>


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="grid gap-3">
              <label htmlFor="PhoneNumber" className={styles.label}>
                Phone
              </label>

              <input
                type="number"
                id="PhoneNumber"
                name="phone"
                placeholder="Phone"
                className={styles.input}
                required
              />
            </div>

            <div className="grid gap-3">
              <label htmlFor="PostalCode" className={styles.label}>
                Postal Code
              </label>

              <input
                type="number"
                id="PostalCode"
                name="postalCode"
                placeholder="Postal Code"
                className={styles.input}
                required
              />
            </div>
          </div>

          <button className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-xl" >Use this address</button>

        </form>

        <div className="rounded-lg bg-gray-200 p-2">
          <div className={styles.headingContainer} >
            <h2 className="text-lg font-medium" >Order Summary</h2>
          </div>
          <div
            className="relative w-screen max-w-sm border mt-0 mb-0 mr-auto ml-auto"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
          >
            <div className="mt-4 space-y-6">
              <ul className="space-y-4">

                {products.map((item) => {
                  const { id, img, name, color, size, shipping, price, quantity } = item
                  const priceInr = currencyFormatter.format(price, { code: 'INR' });
                  const shippingInr = currencyFormatter.format(shipping, { code: 'INR' });
                  const price_quantity = price * quantity
                  const subTotal = price_quantity + shipping

                  return (
                    <li key={id} className="flex items-center gap-3">
                      <div className="h-20 w-25 rounded relative" >
                        <img
                          src={imgUrl + img} alt={name}
                          className="h-full w-full rounded object-cover"
                        />
                        {/* {quantity > 1 && <span className={styles.badge} >{quantity}</span>} */}
                        <span className={styles.badge} >{quantity}</span>
                      </div>

                      <div className="w-full">
                        <h3 className="text-lg text-gray-900">{name}</h3>

                        <dl className="mt-0.5 flex items-center justify-between space-y-px text-[10px] text-gray-600">
                          <div>
                            <div>
                              <dt className="inline text-black text-sm">Size: </dt>
                              <dd className="inline text-sm">XXS</dd>
                            </div>

                            <div>
                              <dt className="inline text-black text-sm">Color: </dt>
                              <dd className="inline text-sm">White</dd>
                            </div>
                          </div>

                          <div>
                            <dt className="inline text-black text-sm">{priceInr} </dt>
                          </div>
                        </dl>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <div className="space-y-4 text-center">
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between">
                        <dt>Subtotal ({products.length} items )</dt>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className={styles.paymentContainer}>
        <div className="grid gap-2 mt-4 mb-3">
          <h2 className="font-medium text-lg  text-black">Payment Method</h2>
          <p className="text-base font-medium text-gray-800">All transactions are secure and encrypted.</p>
        </div>
        <div className=" p-3 rounded-lg bg-gray-200">

          <Radio.Group onChange={onChange} value={value}>
            <Space className="grid gap-4" direction="vertical">
              <Radio className="flex " value={1}>
                <h3 className="font-medium text-lg  text-black">Razor Pay</h3>
                <p className="text-gray-800" >Make payments via UPI, card, net banking, and more</p>
              </Radio>
              <Radio value={2}>
                <h3 className="font-medium text-lg  text-black">Cash on delivery</h3>
                <p className="text-gray-800">Pay with cash upon delivery.</p>
              </Radio>
            </Space>
          </Radio.Group>
        </div>


        <div className="flex justify-end" >

          {value === 1 ? <button className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-xl" >Pay</button> : <button className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded-xl" >Complete Order</button>}

        </div>

      </div>


    </div>
  )
}

export default Checkout