import * as actionTypes from '../Constants/CartConstants';
import axios from 'axios';

const URL = "https://flipkart-backend-ten.vercel.app";

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
};