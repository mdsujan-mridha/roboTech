import axios from "axios"
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS
} from "../constant/productConstant"


// get all product 
// Get All Products --- Filter/Search/Sort
export const getProducts =
    (keyword = "", category, price = [0, 5000], ratings = 0, currentPage = 1) => async (dispatch) => {
        try {
            dispatch({ type: ALL_PRODUCT_REQUEST });

            let url = `http://localhost:5000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
            if (category) {
                url = `http://localhost:5000/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
            }
            const { data } = await axios.get(url);

            dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCT_FAIL,
                payload: error.response.data.message,
            });
        }
    };


// get a single products
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error?.error.response.data.message
        })
    }
}

// clear error 
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}