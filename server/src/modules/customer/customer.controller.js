/**
 * Customer Contoller
 * - Controller responsible for all customers functions, called from Routes.
 */

import * as Yup from 'yup';
import { PROVIDER_ENUM } from './customer.model';
import { AuthProvider } from '../../services/authProvider';

/**
 * Customer.create: Functions responsible for get the request body and apply the bodySchema onto the 
 * - information that is received. If it is valid, check the provider [FACEBOOK or GOOGLE]
 * @param {*} req 
 * @param {*} res 
 */
export const create = async (req, res) => {
  const { token, provider } = req.body;

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.string()
      .oneOf(PROVIDER_ENUM)
      .required(),
  });

  try {
    await bodySchema.validate({ token, provider });

    // If the user is usgin Facebook to login, it will user the AuthProvider for facebook
    if (provider === 'FACEBOOK') {
      const data = await AuthProvider.Facebook.authAsync(token);
      res.status(201).json(data);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
