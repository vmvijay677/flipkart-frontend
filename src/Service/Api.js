import axios from 'axios';

const url = 'https://flipkart-backend-ten.vercel.app';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data);
    } catch (error) {
        console.log("Error while signup!", error);
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data)
    } catch (error) {
        console.log("Error while login!", error);
        return error.response;
    }
};

