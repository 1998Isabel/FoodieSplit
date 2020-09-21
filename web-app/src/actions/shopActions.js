import {
    SET_USER,
} from './types';

export const setLoginUser = (id) => dispatch => {
    dispatch({
        type: SET_USER,
        payload: id
    })
}