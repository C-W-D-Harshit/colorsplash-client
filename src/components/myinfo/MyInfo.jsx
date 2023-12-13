import styles from "./myinfo.module.css"
import { useState, useEffect } from 'react';
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
    Flex
} from 'antd';
import { data } from "../../data/data"
import { CiEdit } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { useAppContext } from "../../context/Context";

const MyInfo = ({ user }) => {
    const { updateUser } = useAppContext()
    const [componentSize, setComponentSize] = useState('default');
    const [toggle, setToggle] = useState(false)
    const [toggleInput, setToggleInput] = useState(false)
    const [toggleInput2, setToggleInput2] = useState(false)
    const [toggleInput3, setToggleInput3] = useState(false)

    const [inputValue, setInputValue] = useState({
        username: user?.username || '',
        phoneNumber: user?.phoneNumber || '',
        email: user?.email || ''
    });

    useEffect(() => {
        // Update state when user prop changes
        setInputValue({
            username: user?.username || '',
            phoneNumber: user?.phoneNumber || '',
            email: user?.email || ''
        });
    }, [user]);

    const onFinish = (values) => {
        updateUser(user.id, values)
        if (toggle) {
            setToggle(false)
        }
    };

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    };


    const handleSave = () => {
        updateUser(user.id, inputValue)
        if (toggleInput) {
            setToggleInput(false)
        }
        if (toggleInput2) {
            setToggleInput2(false)
        }

        if (toggleInput3) {
            setToggleInput3(false)
        }
    }


    return (
        <>
            <div className={`${styles.infoContainer} grid gap-3 `}>

                <div className="grid gap-3 my-3">
                    <h1 className="text-3xl font-semibold">My Info</h1>
                    <h2 className="text-2xl font-semibold">Contact Details</h2>
                </div>

                <div className="grid gap-2">
                    <span className="text-sm font-semibold text-gray-500">Your Name</span>


                    {
                        toggleInput ?
                            <div className="flex gap-5 items-center justify-between ">
                                <Input onChange={handleChange} name="username" value={inputValue.username} placeholder="email" />
                                <div className="flex items-center gap-3">
                                    <Button onClick={handleSave} size={'small'} ghost type="primary">edit</Button>
                                    <Button size={'small'} onClick={() => setToggleInput(!toggleInput)} >cancel</Button>
                                </div>

                            </div>
                            :
                            <div className="flex items-center justify-between ">
                                <strong className="font-semibold">{user?.username}</strong>
                                <CiEdit onClick={() => setToggleInput(!toggleInput)} className="cursor-pointer" />
                            </div>
                    }
                </div>

                <div className="grid gap-2">
                    <span className="text-sm font-semibold text-gray-500">Email Address</span>

                    {
                        toggleInput2 ?
                            <div className="flex gap-5 items-center justify-between ">
                                <Input onChange={handleChange} name="email" value={inputValue.email} placeholder="email" />
                                <div className="flex items-center gap-3">
                                    <Button onClick={handleSave} size={'small'} ghost type="primary">edit</Button>
                                    <Button size={'small'} onClick={() => setToggleInput2(!toggleInput2)} >cancel</Button>
                                </div>

                            </div>
                            :
                            <div className="flex items-center justify-between ">
                                <strong className="font-semibold">{user?.email}</strong>
                                <CiEdit onClick={() => setToggleInput2(!toggleInput2)} className="cursor-pointer" />
                            </div>
                    }
                </div>

                <div className="grid gap-2">
                    <span className="text-sm font-semibold text-gray-500">Phone Number</span>
                    {
                        toggleInput3 ?
                            <div className="flex gap-5 items-center justify-between ">
                                <Input onChange={handleChange} name="phoneNumber" value={inputValue.phoneNumber} placeholder="phone Number" />
                                <div className="flex items-center gap-3">
                                    <Button onClick={handleSave} size={'small'} ghost type="primary">edit</Button>
                                    <Button size={'small'} onClick={() => setToggleInput3(!toggleInput3)} >cancel</Button>
                                </div>

                            </div>
                            :
                            <div className="flex items-center justify-between ">
                                <strong className="font-semibold">{user?.phoneNumber}</strong>
                                <CiEdit onClick={() => setToggleInput3(!toggleInput3)} className="cursor-pointer" />
                            </div>
                    }
                </div>

            </div>



            <div className={`grid gap-5 mt-5 ${styles.addressContainer}`} >
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Address</h1>
                    <div className="flex items-center gap-4 cursor-pointer">

                        {

                            user?.Street_Address !=="" ?

                                <div className="flex items-center gap-2" onClick={() => setToggle(!toggle)}>
                                    <CiEdit />
                                    <span className="text-sm font-semibold text-gray-500">Edit Address</span>
                                </div>
                                :

                                <div className="flex items-center gap-2" onClick={() => setToggle(!toggle)}>
                                    <IoAddSharp />
                                    <span className="text-sm font-semibold text-gray-500">Add Address</span>
                                </div>
                        }
                    </div>
                </div>

                <div className={`grid gap-5 ${styles.box}`}>
                    <h1 className="text-1xl font-medium">{user?.username}</h1>
                    <span className="text-sm font-semibold text-gray-500">{user?.phoneNumber}</span>
                    <ul>
                        <li className="text-gray-800 text-base">Street Address: {user?.Street_Address}</li>
                        <li className="text-gray-800 text-base">Apt, suite, unit: {user?.Apt_suite_unit}</li>
                        <li className="text-gray-800 text-base">Town / City: {user?.Town_City}</li>
                        <li className="text-gray-800 text-base">State: {user?.State}</li>
                        <li className="text-gray-800 text-base">Postal Code: {user?.Postal_Code}</li>
                    </ul>
                </div>
            </div>

            {toggle &&
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={user}
                    size={componentSize}
                    className={styles.form}
                    onFinish={onFinish}
                >
                    <Form.Item name="firstname" className="font-medium" label="First Name*">
                        <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item name="lastname" className="font-medium" label="Last Name*">
                        <Input placeholder="Last Name" />
                    </Form.Item>

                    <Form.Item name="Country_Region" className="font-medium" label="Country/Region*">
                        <Input placeholder="Country / Region" />
                    </Form.Item>

                    <Form.Item name="Street_Address" className="font-medium" label="Street Address*">
                        <Input placeholder="Street Address" />
                    </Form.Item>

                    <Form.Item name="Apt_suite_unit" className="font-medium" label="Apt, suite, unit">
                        <Input placeholder="apartment, suite, unit, etc. (optional)" />
                    </Form.Item>

                    <Form.Item name="Town_City" className="font-medium" label="City*">
                        <Input placeholder="Town / City" />
                    </Form.Item>

                    <Form.Item name="State" className="font-medium" label="State*">
                        <Select placeholder='State' >
                            {data.map((item, idx) => (
                                <Select.Option key={idx} value={item.value}>{item.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>


                    <Form.Item name="Phone" className="font-medium" label="Phone*">
                        <Input type="number" placeholder="Phone" />
                    </Form.Item>

                    <Form.Item name="Postal_Code" className="font-medium" label="Postal Code*">
                        <InputNumber placeholder="Postal Code" />
                    </Form.Item>

                    <div className="flex items-center justify-evenly gap-5">
                        <button className={`${styles.btn} ${styles.sbtn}`}>Save</button>
                        <button onClick={() => setToggle(!toggle)} className={`${styles.btn} ${styles.cbtn}`}>Cancel</button>
                    </div>
                </Form>}
        </>
    );
}

export default MyInfo