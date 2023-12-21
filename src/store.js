import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import {
    productDetailsReducer,
    productReducer
} from './reducers/productReducer';

const reducer = combineReducers({
    //    user reducer 
    user: userReducer,
    // product reducer 
    products: productReducer,
    // get a singl product reducer 
    productDetails: productDetailsReducer,
    cart: cartReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ?
            JSON.parse(localStorage.getItem("shippingInfo"))
            : {}
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

);


export default store;