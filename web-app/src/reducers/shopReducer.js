import db from '../mydb';
import {
    SET_USER,
    ADD_TO_ORDER,
    REMOVE_FROM_ORDER,
    SET_PERSONAL_PRICE,
    SET_PAY_LIST
} from '../actions/types';

const initialState = {
    ...db,
    loginuser: db.users.find(e => e.id === "u01"),
    payment: {
        method: "myself",
        paylist: ["u01"],
        paidlist: ["u01", "u02"],
        notpaidlist: ["u03"]
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            console.log("SET USER", action.payload)
            let userid = action.payload
            let loginuser = state.db.users.find(e => e.id === userid)
            return {
                ...state,
                loginuser: loginuser
            }
        }
        case ADD_TO_ORDER: {
            let { product, user, idx } = action.payload;
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
                let update_order = { ...now_order[order_idx] }
                update_order.users.push([user])
                now_order[order_idx] = update_order
            }
            else {
                let update_order = { ...now_order[order_idx] }
                update_order.users[idx].push(user)
                now_order[order_idx] = update_order
            }
            return {
                ...state,
                orders: now_order
            }
        }
        case REMOVE_FROM_ORDER: {
            let { product, user, idx } = action.payload;
            // console.log("ADD_TO_ORDER", product, user, idx, state.menu.products.find(e => e.id === product))
            let now_order = [...state.orders]
            let order_idx = now_order.findIndex(e => e.productid == product)
            let update_order = { ...now_order[order_idx] }
            update_order.users[idx] = update_order.users[idx].filter(u => u !== user)
            update_order.users = update_order.users.filter(u => u.length !== 0)
            now_order[order_idx] = update_order
            return {
                ...state,
                orders: now_order
            }
        }
        case SET_PERSONAL_PRICE: {
            let { user, price } = action.payload;
            let the_user_idx = state.users.findIndex(e => e.id === user)
            console.log("reducer", the_user_idx, user, state.users, price)
            let update_user = {...state.loginuser}
            update_user.person_price = price
            let update_users = [...state.users]
            update_users[the_user_idx] = update_user
            return {
                ...state,
                loginuser: update_user,
                users: update_users
            }
        }
        case SET_PAY_LIST: {
            let { method, paylist } = action.payload;
            return {
                ...state,
                payment: {
                    ...state.payment,
                    method: method,
                    paylist: paylist
                }
            }
        }
        default:
            return state;
    }
};