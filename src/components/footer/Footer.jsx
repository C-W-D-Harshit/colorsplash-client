
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import Divider from '@mui/joy/Divider';
// import Input from '@mui/joy/Input';
// import List from '@mui/joy/List';
// import ListSubheader from '@mui/joy/ListSubheader';
// import ListItem from '@mui/joy/ListItem';
// import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import SendIcon from '@mui/icons-material/Send';
// import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
// import logo from "../../assets/colorlogo.webp"

// import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

// import { useState } from "react";
// const Footer = () => {
//   const [color, setColor] = useState('neutral');
//   const currentYear = new Date().getFullYear();


//   return (
//     <div className={styles.container}>

//       <Sheet
//         variant="solid"
//         color={color}
//         invertedColors
//         sx={{
//           bgcolor: '#2A2F2F',
//           flexGrow: 1,
//           p: 2,
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between' }}>

//           <div className="flex items-center gap-2">
//             <img className={styles.img} src={logo} alt="colorsplash" />

//           </div>

//           <div className="flex items-center gap-2">
//             <Divider orientation="vertical" />
//             <h1>Get In Touch</h1>
//             <IconButton variant="plain">
//               <a target="_blank" className={styles.sicon} href='https://www.instagram.com/colorsplash0/' rel="noreferrer">
//                 <InstagramIcon />
//               </a>
//             </IconButton>

//             <IconButton variant="plain">
//               <a className={styles.sicon} href="tel:7011532218">
//                 <LocalPhoneOutlinedIcon />
//               </a>
//             </IconButton>

//             <IconButton variant="plain">
//               <a className={styles.sicon} href="mailto: colorsplash1005@gmail.com" >
//                 <EmailOutlinedIcon />
//               </a>
//             </IconButton>

//           </div>
//         </Box>


//         <Divider sx={{ my: 2 }} />
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: { md: 'flex-start' },
//             // justifyContent: 'space-between',
//             justifyContent: 'center',
//             flexWrap: 'wrap',
//             gap: 10,
//           }}
//         >

//           <List
//             size="sm"
//             orientation="horizontal"
//             wrap
//             sx={{
//               flexGrow: 0,
//               '--ListItem-radius': '8px',
//               '--ListItem-gap': '0px',
//             }}
//           >
//             <ListItem nested sx={{ width: { xs: '50%', md: 140 } }}>
//               <ListSubheader sx={{ fontWeight: 'xl' }}>Legal</ListSubheader>
//               <List>
//                 {legallist.map((item) => (
//                   <ListItem key={item.name}>
//                     <ListItemButton><Link to={item.link} >{item.name}</Link></ListItemButton>
//                   </ListItem>
//                 ))}
//               </List>
//             </ListItem>

//             <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
//               <ListSubheader sx={{ fontWeight: 'xl' }}>Categories</ListSubheader>
//               <List sx={{ '--ListItemDecorator-size': '32px' }}>
//                 {list.map((item) => (
//                   <ListItem key={item.name}>
//                     <ListItemButton><Link to={item.link} >{item.name}</Link></ListItemButton>
//                   </ListItem>
//                 ))}
//               </List>
//             </ListItem>

//             <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
//               <ListSubheader sx={{ fontWeight: 'xl' }}>Company</ListSubheader>
//               <List sx={{ '--ListItemDecorator-size': '32px' }}>
//                 {companylist.map((item) => (
//                   <ListItem key={item.name}>
//                     <ListItemButton><Link to={item.link} >{item.name}</Link></ListItemButton>
//                   </ListItem>
//                 ))}
//               </List>
//             </ListItem>
//           </List>
//         </Box>
//         <div className="flex justify-center mt-3 mb-3">
//           <strong className=" text-slate-50 text-sm">Copyright © {currentYear} Color Splash Folks Pvt Ltd. All rights reserved.</strong>
//         </div>
//       </Sheet>


//     </div>
//   )
// }

// export default Footer

import styles from "./footer.module.css"
import logo from "../../assets/colorlogo.webp"
import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const list = [
    {
      name: 'Shop',
      link: '/products/0'
    },
    {
      name: ' Men',
      link: '/products/1'
    },
    {
      name: 'Women',
      link: '/products/2'
    },
    {
      name: 'New Arrivals',
      link: '/products/3'
    }
  ]

  const legallist = [
    {
      name: 'Privacy Policy',
      link: '/privacy_policy'
    },
    {
      name: 'Terms & Conditions',
      link: '/Terms_&_Conditions'
    },
    {
      name: 'Cookie Policy',
      link: '/cookie_policy'
    },
    {
      name: 'Exchange Policy',
      link: '/exchange_policy'
    }
  ]


  const companylist = [
    {
      name: 'About Us',
      link: '/about-us'
    },
    {
      name: 'Contact Us',
      link: '/contact-us'
    }
  ]

  return (
    <footer className="bg-gray-900">
      <div
        className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>

            <div>
              <img className={styles.img} src={logo} alt="colorsplash" />
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Elevate Your Style, Embrace the New Chic: Unveiling Our Latest Collection.
            </p>

            <ul className="mt-8 flex gap-6">
 

              <li>
                <a
                  href="https://www.instagram.com/colorsplash0/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

            </ul>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Explore Categories</p>

              <ul className="mt-6 space-y-4 text-sm">

                {list.map((item) => (
                  <li key={item.name}>
                    <Link className="text-gray-700 transition hover:opacity-75 dark:text-gray-200" to={item.link}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Company</p>

              <ul className="mt-6 space-y-4 text-sm">

                {companylist.map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                {legallist.map((item) => (
                  <li key={item.name}>
                    <Link to={item.link} className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {currentYear}. Color Splash. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer