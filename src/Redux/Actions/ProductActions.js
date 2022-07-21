import axios from 'axios';
import * as actionTypes from "../Constants/ProductConstant";

const url = "https://flipkartclonebyvignesh.herokuapp.com";

export const getProducts = () => async (dispatch) => {
    try {
        let { data } = await axios.get(`${url}/products`);

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${url}/product/${id}`);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
};
