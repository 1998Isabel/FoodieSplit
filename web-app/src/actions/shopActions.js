import {
    SET_USER,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
    SET_PERSONAL_PRICE,
    SET_PAY_LIST
} from './types';

export const setLoginUser = (id) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: id
    })
}

export const addProductToOrder = (productid, userid, listidx) => dispatch => {
    dispatch({
        type: ADD_TO_ORDER,
        payload: {
            product: productid,
            user: userid,
            idx: listidx
        }
    })
}

export const removeProductfromOrder = (productid, userid, listidx) => dispatch => {
    dispatch({
        type: REMOVE_FROM_ORDER,
        payload: {
            product: productid,
            user: userid,
            idx: listidx
        }
    })
}

export const setPersonPrice = (userid, price) => dispatch => {
    console.log("setPersonPrice", userid, price)
    dispatch({
        type: SET_PERSONAL_PRICE,
        payload: {
            user: userid,
            price: price
        }
    })
}

export const setPaymentList = (method, paylist) => dispatch => {
    dispatch({
        type: SET_PAY_LIST,
        payload: {
            method,
            paylist
        }
    })
}