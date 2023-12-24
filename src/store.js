import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import {
    allUserReducer,
    forgotPasswordReducer,
    profileReducer,
    userDetailsReducer,
    userReducer
} from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';
import {
    newProductReducer,
    newReviewReducer,
    productDetailsReducer,

    productReducer,

    productReviewReducer,

    productsReducer,
    reviewReducer
} from './reducers/productReducer';
import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer
} from './reducers/orderReducer';

const reducer = combineReducers({
    //    user reducer 
    user: userReducer,
    // product reducer 
    product: productReducer,
    products: productsReducer,
    // get a singl product reducer 
    productDetails: productDetailsReducer,
    cart: cartReducer,
    newProduct: newProductReducer,
    // all orders for admin 
    allOrders: allOrdersReducer,
    // update & delete order by admin 
    order: orderReducer,
    productReviews: productReviewReducer,
    review: reviewReducer,
    allUsers: allUserReducer,
    userDetails: userDetailsReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    newReview: newReviewReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

);


export default store;