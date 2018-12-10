import axios from 'axios';

/**
 * Fields and base url cinfiguration
 * This variables are requested for authAsync function above
 */
const FIELDS = 'email,name,picture';
const BASE_URL = `https://graph.facebook.com/me?fields=${FIELDS}`;

/**
 * This is the code resposible for validatng the Facebook token when the user login successfully
 * Required date: Toke, BASE_URL
 * Optional date: none
 */
export const authAsync = async token => {
  try {
    const res = await axios.get(`${BASE_URL}&access_token=${token}`);

    if (res.status === 200) {
      return res.data;
    }

    throw new Error('Error trying to login with Facebook account.');
  } catch (error) {
    throw error;
  }
};

export const Facebook = {
  authAsync,
};
