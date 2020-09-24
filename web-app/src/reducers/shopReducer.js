import db from '../mydb';
import {
    SET_USER,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER
} from '../actions/types';

const initialState = {
    ...db,
    user: db.users.find(e => e.id === "u01")
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            console.log("SET USER", action.payload)
            let userid = action.payload
            let loginuser = state.db.users.find(e => e.id === userid)
            return {
                ...state,
                user: loginuser
            }
        case ADD_TO_ORDER:
            let { product, user, idx } = action.payload
            // console.log("ADD_TO_ORDER", product, user, idx, state.menu.products.find(e => e.id === product))
            let now_order = [...state.orders]
            let order_idx = now_order.findIndex(e => e.productid == product)
            if (idx === -1 && order_idx === -1) {
                now_order.push({
                    productid: product,
                    product_price: state.menu.products.find(e => e.id === product).price,
                    amount: 1,
                    users: [[user]]
                })
            }
            else if (idx === -1) {
                let update_order = {...now_order[order_idx]}
                update_order.users.push([user])
                now_order[order_idx] = update_order
            }
            else {
                console.log(idx, order_idx)
                let update_order = {...now_order[order_idx]}
                update_order.users[idx].push(user)
                now_order[order_idx] = update_order
            }
            return {
                ...state,
                orders: now_order
            }
        case REMOVE_FROM_ORDER:
            return {
                ...state
            }
        default:
            return state;
    }
};