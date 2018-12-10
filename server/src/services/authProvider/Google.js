import axios from 'axios';

/**
 * Fields and base url cinfiguration
 * This variables are requested for authAsync function above
 */
const BASE_URL = 'https://www.googleapis.com/userinfo/v2/me';

/**
 * This is the code resposible for validatng the Google token when the user login successfully
 * Required date: Toke, BASE_URL
 * Optional date: none
 */
export const authAsync = async token => {
    try {
        const res = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.status === 200) {
        return res.data;
        }

        throw new Error('No success with Google');
    } catch (error) {
        throw error;
    }
};

export const Google = {
    authAsync,
};