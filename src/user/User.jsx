import { useState, useEffect } from "react";
import styles from "./user.module.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { CiHeart, CiUser, CiShoppingBasket } from "react-icons/ci";
import {
    Orders,
    MyInfo,
    Wishlist
} from "../components/export"
import { useAppContext } from "../context/Context"

const User = () => {
    const { user } = useAppContext()
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="m-4"  >
            <div className='grid gap-3' >
                <h1 className={`${styles.h1} text-black text-3xl pl-4 `}>Hello {user.username}</h1>
                <p className=" text-black ">Welcome to your Account</p>
            </div>


            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ padding: 0, borderBottom: 1, borderColor: 'divider' }}>
                        <TabList sx={{ padding: 0 }} onChange={handleChange} aria-label="lab API tabs example">
                            <Tab iconPosition="start" icon={<CiShoppingBasket />} label="My orders" value="1" />
                            <Tab iconPosition="start" icon={<CiHeart />} label='Wishlist' value="2" />
                            <Tab iconPosition="start" icon={<CiUser />} label="My info" value="3" />
                        </TabList>
                    </Box>

                    <TabPanel sx={{ padding: '10px' }} value="1"> <Orders />  </TabPanel>
                    <TabPanel sx={{ padding: 0 }} value="2"> <Wishlist /> </TabPanel>
                    <TabPanel sx={{ padding: 0 }} value="3"> <MyInfo user={user} /></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}


export default User