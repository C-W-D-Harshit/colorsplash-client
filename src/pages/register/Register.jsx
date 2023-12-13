import { useState, useEffect } from 'react'
import { Link, Navigate , useNavigate} from 'react-router-dom'
import styles from "./register.module.css"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useAppContext } from "../../context/Context"
import Logo from "../../assets/colorlogo.webp"


const Register = () => {
    const { loginFn, registerFn, isRLLoading, user } = useAppContext()
    const [show, setShow] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isMember, setIsMember] = useState(false)
    const navigate = useNavigate();


    const handleShowPassword = () => {
        setShow(!show)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        if (isMember) {
            // loginUser(data)
            loginFn(data)
        } else {
            if (data.phoneNumber.length > 9) {
                // registerUser(data);
                registerFn(data)
            }
        }
        e.currentTarget.reset();
    }


    const handlePhoneNumberChange = (event) => {
        const cleanedPhoneNumber = event.target.value.replace(/\D/g, '');
        setPhoneNumber(cleanedPhoneNumber);
    };


    const handleIsMember = () => {
        setIsMember(!isMember)
    }


    useEffect(() => {
        if (user) {
          setTimeout(() => {
            navigate("/my_account");
          }, 1100);
        }
      }, [user, navigate]);

    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <Link to="/">   <img className={styles.img} src={Logo} alt="logo" /></Link>

                <div className="flex gap-2 ">
                </div>
            </div>
            <div className={styles.container}>
                {isRLLoading ?
                    <div className={styles.loading}>
                    </div> :

                    <div className={styles.formContainer} >
                        <h1 className={styles.title}> {isMember ? "Welcome Back!" : "Create Account"}</h1>
                        <div className={styles.authGoogle_faceBook} >
                        </div>


                        <span className={styles.span}>- OR - </span>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {isMember ? null : <div className={styles.group}>
                                <input name='username' className={styles.input} type="text" required />
                                <span className={styles.bar}></span>
                                <label className={styles.label}>Name</label>
                            </div>}
                            <div className={styles.group}>
                                <input name='email' className={styles.input} type="text" required />
                                <span className={styles.bar}></span>
                                <label className={styles.label}>Email Address</label>
                            </div>

                            {
                                isMember ? null :
                                    <div className={styles.group}>
                                        <input type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            className={styles.input}
                                            required />
                                        <span className={styles.bar}></span>
                                        <label className={styles.label}>Phone Number</label>
                                    </div>
                            }

                            <div className={`${styles.group} ${styles.passwordContainer}`}>
                                <input name='password' className={styles.input} type={show ? "text" : "password"} required />
                                <span className={styles.bar}></span>
                                <label className={styles.label}>Password</label>

                                {show ? <AiOutlineEyeInvisible onClick={handleShowPassword} className={styles.pIcon} /> :
                                    <AiOutlineEye onClick={handleShowPassword} className={styles.pIcon} />
                                }
                            </div>
                            <button className={`${styles.btn} ${styles.button}`}>{isMember ? "Login" : "Create Account"}</button>
                        </form>
                        <p className={styles.desc}>
                            {`${isMember ? "Don't" : "Already"} have a account?`} <span
                                onClick={handleIsMember} className={styles.descSpan}> {isMember ? "Sign Up" : "Log In"}  </span> </p>
                    </div>

                }

            </div>
        </div>

    )
}

export default Register