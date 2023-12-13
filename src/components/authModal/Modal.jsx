import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./modal.module.css"
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useAppContext } from "../../context/Context";
import { toast } from "react-hot-toast";
import img from "../../assets/TuttoRiccoMarching.png"
import logo from "../../assets/colorlogo.webp"

const Modal = () => {
    const { loginFn, registerFn, isRLLoading, user, toggle_Auth_Modal, toggleAuthModal } = useAppContext()
    const [show, setShow] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isMember, setIsMember] = useState(false)


    const handleShowPassword = () => {
        setShow(!show)
    }

    
    useEffect(() => {
        if (toggleAuthModal) {
            document.body.style.overflow = "hidden";
            document.body.style.overflowX = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.overflowX = "hidden";

        }
    }, [toggleAuthModal]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const { email, firstname, lastname, password } = data

        if (isMember) {
            if (!email || !password) {
                toast.error("please enter all values!");
            } else {
                loginFn(data)
            }
        } else {
            if (!email || !firstname || !lastname || !password) {
                toast.error("please enter all values!");
            } else if (phoneNumber.length !== 10 || phoneNumber.length > 10) {
                    toast.error("invalid phone number ");
            }
            else {
                data.username = data.firstname + " " + data.lastname;
                registerFn(data)
            }
        }
        // e.currentTarget.reset();
    }




    const handlePhoneNumberChange = (event) => {
        const cleanedPhoneNumber = event.target.value.replace(/\D/g, '');
        setPhoneNumber(cleanedPhoneNumber);
    };


    const handleIsMember = () => {
        setIsMember(!isMember)
    }

    return (
        <div className={` ${toggleAuthModal ? `${styles.show} ${styles.container}` : `${styles.container}`} `}>
            <div className={styles.modalContainer} >
                <header className=" p-3 flex justify-end " >
                    <IoCloseOutline onClick={toggle_Auth_Modal} className={styles.closeIcon} />
                </header>

                <div className='flex justify-center'>
                    <h1 className="text-3xl mb-4"> {isMember ? "Welcome Back!" : "Create Account"}</h1>
                </div>



                <section className="bg-white relative">
                    <div className=' grid gap-20 '>
                        <section className="relative flex h-32 items-end bg-gray-900 ">
                            <img
                                alt="Night"
                                src={img}
                                className="absolute inset-0 h-full w-full object-contain opacity-80"
                            />

                        </section>
                        <div className={styles.imgContainer} >
                            <img src={logo} alt="color splash" />
                        </div>
                        <main
                            className="flex items-center justify-center p-3"
                        >
                            <div className="max-w-xl">
                                <div className="relative -mt-16 block">



                                    <h1 className="mt-2 text-2xl font-medium text-gray-900 text-center ">
                                        Welcome to Color splash
                                    </h1>

                                    <p className="mt-2 leading-relaxed text-gray-500 text-center ">
                                        Elevate Your Style, Embrace the New Chic: Unveiling Our Latest Collection.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-8 grid  gap-6">
                                    {!isMember && <div className="col-span-6">
                                        <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            name="firstname"
                                            className={styles.input}
                                        />
                                    </div>}

                                    {!isMember && <div className="col-span-6 ">
                                        <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            name="lastname"
                                            className={styles.input}
                                        />
                                    </div>}

                                    <div className="col-span-6">
                                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className={styles.input}
                                        />
                                    </div>

                                    {!isMember && <div className="col-span-6">
                                        <label htmlFor="Phone" className="block text-sm font-medium text-gray-700"> Phone </label>

                                        <input
                                            type="number"
                                            id="Phone"
                                            name="phoneNumber"
                                            maxLength="10"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            className={styles.input}
                                        />
                                    </div>}

                                    <div className="col-span-6 ">

                                        <div className='flex items-center justify-between'>
                                            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                            {
                                                show ?
                                                    <div onClick={handleShowPassword} className='flex cursor-pointer items-center gap-2' ><AiOutlineEyeInvisible className={styles.pIcon} />  <span className='text-sm'>Hide</span> </div>
                                                    :
                                                    <div onClick={handleShowPassword} className='flex cursor-pointer items-center gap-2' ><AiOutlineEye className={styles.pIcon} />  <span className='text-sm'>Show</span> </div>

                                            }
                                        </div>

                                        <input
                                            type={show ? "text" : "password"}
                                            id="Password"
                                            name="password"
                                            className={styles.input}
                                        />
                                    </div>

                                    {/* {!isMember && <div className="col-span-6">
                                        <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                            Password Confirmation
                                        </label>

                                        <input
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="password_confirmation"
                                            className={styles.input}
                                        />
                                    </div>} */}


                                    {!isMember && <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to our
                                            <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                            and
                                            <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                        </p>
                                    </div>}

                                    <div className="col-span-6 grid">
                                        <button
                                            className={`${styles.button} inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium transition `}
                                        >
                                            {isMember ? "Login" : "Create an account"}
                                        </button>

                                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                            {`${isMember ? "Don't" : "Already"} have an account?`} &nbsp;
                                            <span className="text-gray-700 underline cursor-pointer" onClick={handleIsMember}> {isMember ? "Sign Up" : "Log In"} </span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Modal