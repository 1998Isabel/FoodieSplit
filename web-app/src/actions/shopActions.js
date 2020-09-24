import {
    SET_USER,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER
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