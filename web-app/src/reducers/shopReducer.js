import db from '../mydb';
import {
    SET_USER
} from '../actions/types';

const initialState = {
    db: db,
    user: db.users.find(e => e.id === "u01")
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            console.log("SET USER", action.payload)
            const userid = action.payload
            const user = state.db.users.find(e => e.id === userid)
            return {
                ...state,
                user: user
            }
        default:
            return state;
    }
};