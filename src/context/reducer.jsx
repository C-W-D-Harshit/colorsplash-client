import {
    TOGGLE_MENU,
    TOGGLE_AUTH_MODAL,
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
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    SUB_CATEGORIES,
    SORT_BY_PRICE,
    FILTER_MODAL,
    FILTER_BY_PRICE,
    PAGE_NUM
} from "./action"


import { initialState } from "./Context";

const reducer = (state, action) => {

    if (action.type === TOGGLE_MENU) {
        return {
            ...state,
            toggleMenu: !state.toggleMenu
        }
    }

    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isRLLoading: true };
    }

    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isRLLoading: false,
            user: action.payload.user,
            toggleAuthModal: false
        };
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isRLLoading: false,
            msg: action.payload.msg
        };
    }

    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isRLLoading: true };
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isRLLoading: false,
            user: action.payload.user,
            toggleAuthModal: false
        };
    }

    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isRLLoading: false,
        };
    }

    if (action.type === GET_CURRENT_USER_BEGIN) {
        return {
            ...state,
            userLoading: true
        }
    }

    if (action.type === GET_CURRENT_USER_SUCCESS) {

        return {
            ...state,
            userLoading: false,
            user: action.payload.userProfile,
        }
    }


    if (action.type === GET_CURRENT_USER_ERROR) {
        return {
            ...state,
            userLoading: false,
        };
    }


    if (action.type === UPDATE_USER_BEGIN) {
        return {
            ...state,
            userUpdating: true,
        };
    }

    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            userUpdating: false,
        };
    }


    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            userUpdating: false,
        };
    }


    if (action.type === SUB_CATEGORIES) {
        return {
            ...state,
            sub_category: action.payload.sub_categories,
        };
    }

    if (action.type === SORT_BY_PRICE) {
        return {
            ...state,
            sortprice: action.payload.sort_by_price,
        };
    }

    if (action.type === FILTER_BY_PRICE) {
        return {
            ...state,
            filterprice: action.payload.filter_by_price,
        };
    }

    if (action.type === FILTER_MODAL) {
        return {
            ...state,
            filterModal: !state.filterModal,
        };
    }
    if (action.type == PAGE_NUM) {
        return {
            ...state,
            pagenum: action.payload.page_num,
        };
    }

    if (action.type === TOGGLE_AUTH_MODAL) {
        return {
            ...state,
            toggleAuthModal: !state.toggleAuthModal,
        };
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            user: null,
            userLoading: false
        };
    }


    throw new Error(`no such action : ${action.type}`);
}

export default reducer;

