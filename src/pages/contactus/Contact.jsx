import { useRef } from 'react';
import styles from "./contact.module.css"
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai"
import { MdOutlineLocationOn } from "react-icons/md"
import { BsFacebook } from "react-icons/bs"
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();
  const socialLinks = [
    // {
    //   icon: <BsFacebook className={styles.icons} />,
    //   link: "https://www.facebook.com/magickdcompany/",
    // },
    // {
    //   icon: <AiOutlineTwitter className={styles.icons} />,
    //   link: "https://twitter.com/Magickdcompany",
    // },
    {
      icon: <AiOutlineInstagram className={styles.icons} />,
      link: "https://www.instagram.com/colorsplash0/",
    }
  ];

  // SERVICE_ID=service_2r33lsd
  // TEMPLATE_ID= template_3157isk
  // PUBLIC_KEY =QhhW6tCRpKcL-tNKK

  // console.log(import.meta.env.PUBLIC_KEY)
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm('service_2r33lsd', 'template_3157isk', form.current, 'QhhW6tCRpKcL-tNKK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} >
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.descs}>Any question or remarks? Just write us a message!</p>
      </div>
      <div className={styles.formContainer} >
        <form ref={form} onSubmit={sendEmail} className={styles.section_one}>
          <div className={styles.group}>
            <input type="text" name="user_name" className={styles.input} required />
            <span className={styles.bar}></span>
            <label className={styles.label}>First Name</label>
          </div>

          {/* <div className={styles.group}>
            <input name='lastName' className={styles.input} type="text" required />
            <span className={styles.bar}></span>
            <label className={styles.label}>Last Name</label>
          </div> */}

          <div className={styles.group}>
            <input type="email" name="user_email" className={styles.input} required />
            <span className={styles.bar}></span>
            <label className={styles.label}>Email Address</label>
          </div>

          <div className={styles.group}>
            <textarea name='message' className={`${styles.input} ${styles.textarea}`} type="text" required />
            <span className={styles.bar}></span>
            <label className={styles.label}>Message</label>
          </div>

          <div className={styles.btnContainer}>
            <input className={styles.btn} type="submit" value="Send Message" />
          </div>

        </form>
        <div className={styles.section_two}>

          <div className={styles.titleContainer} >
            <h2 className={styles.secTitle}>Contact Information</h2>
            <p className={styles.desc}>please contact us via following methods</p>
          </div>

          <div className={styles.contactInfoContainer}>
            <AiOutlinePhone className={styles.icons} />
            <a className={styles.links} href="tel:
7011532218">
              7011532218</a>
          </div>
          <div className={styles.contactInfoContainer}>
            < AiOutlineMail className={styles.icons} />
            <a className={styles.links} href="mailto: colorsplash1005@gmail.com">colorsplash1005@gmail.com</a>
          </div>
          <div className={styles.contactInfoContainer}>
            <MdOutlineLocationOn className={styles.icons} />
            <span className={styles.links}>Mumbai, Maharashtra, India</span>
          </div>

          <div className={styles.socialConatiner} >
            <ul className={styles.ul}>
              {socialLinks.map((item, idx) => (
                <li className={styles.li} key={idx}>
                  <a target="_blank" className={styles.sicon} href={item.link} rel="noreferrer">{item.icon}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact