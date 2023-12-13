import { useContext, useReducer, createContext, useEffect, } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import reducer from "./reducer"

import {
    TOGGLE_MENU,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    GET_CURRENT_USER_BEGIN,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_ERROR,
    LOGOUT_USER,
    SUB_CATEGORIES,
    SORT_BY_PRICE,
    FILTER_BY_PRICE,
    FILTER_MODAL,
    PAGE_NUM,
    TOGGLE_AUTH_MODAL
} from "./action"




const initialState = {
    isLoading: false,
    isRLLoading: false,
    userLoading: false,
    userUpdating: false,
    toggleMenu: false,
    toggleAuthModal: false,
    filterModal: false,
    toggleSearch: false,
    user: null,
    sub_category: [],
    sortprice: 'asc',
    filterprice: 0,
    pagenum: 1.
}

const Context = createContext({})

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    axios.defaults.withCredentials = true;
    const authFetch = axios.create({
        baseURL: 'http://localhost:1337/api/auth/local',
        withCredentials: true,
        crossDomain: true,
    });

    authFetch.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response.status === 401) {
                // logoutUser();
                console.log('  logoutUser()');
            }
            return Promise.reject(error)
        }
    )


    const toggleMenuFn = () => {
        dispatch({ type: TOGGLE_MENU })
    }


    //> user register _ login
    const registerFn = async (userData) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const response = await authFetch.post(
                "/register",
                userData
            );
            // authFetch
            const { user } = response.data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user },
            });
            toast.success("User Created!,  Redirecting.....");
        } catch (error) {
            toast.error(error.response.data.error.message)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { error },
            });
        }
    };

    const loginFn = async (userData) => {
        dispatch({ type: LOGIN_USER_BEGIN });

        const loginData = {
            identifier: userData.email, // Replace with actual username or email
            password: userData.password
        };

        try {
            const { data } = await authFetch.post(
                "/",
                loginData
            );
            const { user, jwt } = data;
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: { user },
            });

            localStorage.setItem('token', jwt);
            toast.success("Login Successful!,  Redirecting.....");
        } catch (error) {
            toast.error(error.response.data.msg);
            dispatch({
                type: LOGIN_USER_ERROR,
            });
        }
    };

    const logoutUser = async () => {
        try {
            await authFetch.post("/api/user/logout");
            dispatch({ type: LOGOUT_USER });
        } catch (error) {
            console.log(error);
        }
    };

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        dispatch({ type: GET_CURRENT_USER_BEGIN })
        try {
            const response = await axios.get('http://localhost:1337/api/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                const userProfile = response.data;
                dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { userProfile } })
            } else {
                console.error('Error fetching user profile:', response.data || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error fetching user profile:', error.message || error);
            dispatch({ type: GET_CURRENT_USER_ERROR })

        }
    };

    const updateUser = async (userId, updatedUserData) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put(`http://localhost:1337/api/users/${userId}`, updatedUserData, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the JWT token for authentication
                }
            });

            if (response.status === 200) {
                const userProfile = response.data;
                dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { userProfile } })
            } else {
                console.error('Update failed:', response.data || 'Something went wrong');
                // Handle update failure or unexpected status codes
            }
        } catch (error) {
            console.error('Error updating user:', error.message || error);
            // Handle other errors, such as network issues
        }
    };

    const handle_Sub_Categories = (sub_categories) => {
        dispatch({ type: SUB_CATEGORIES, payload: { sub_categories } })
    }
    const handle_Sort_Price = (sort_by_price) => {
        dispatch({ type: SORT_BY_PRICE, payload: { sort_by_price } })
    }
    const handle_Filter_price = (filter_by_price) => {
        dispatch({ type: FILTER_BY_PRICE, payload: { filter_by_price } })
    }

    const handle_page_num = (page_num) => {
        dispatch({ type: PAGE_NUM, payload: { page_num } })
    }

    const handle_Filter_Modal = () => {
        dispatch({ type: FILTER_MODAL })
    }


    const toggle_Auth_Modal = () => {
        dispatch({ type: TOGGLE_AUTH_MODAL })
    }

    useEffect(() => {
        fetchUserProfile()
    }, [])


    return (
        <Context.Provider value={{
            ...state, toggleMenuFn, loginFn, registerFn, logoutUser, updateUser, handle_Sub_Categories,
            handle_Sort_Price,
            handle_Filter_price,
            handle_Filter_Modal,
            handle_page_num,
            toggle_Auth_Modal
        }} >
            {children}
        </Context.Provider>
    )
}

const useAppContext = () => {
    return useContext(Context)
}

export { ContextProvider, useAppContext, initialState };