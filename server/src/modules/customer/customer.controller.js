/**
 * Customer Contoller
 * - Controller responsible for all customers functions, called from Routes.
 */

import * as Yup from 'yup'
import { PROVIDER_ENUM } from './customer.model'
import { getOrCreateCustomer, me } from './customer'
import { AuthServices } from '../../services/Auth'
import { AuthProvider } from '../../services/authProvider'

/**
 * Customer.create: Functions responsible for get the request body and apply the bodySchema onto the 
 * - information that is received. If it is valid, check the provider [FACEBOOK or GOOGLE]
 */
export const create = async (req, res) => {
  const { token, provider } = req.body

  const bodySchema = Yup.object().shape({
    token: Yup.string().required(),
    provider: Yup.string()
      .oneOf(PROVIDER_ENUM)
      .required(),
  })

  try {
    await bodySchema.validate({ token, provider })
    
    let data
    // If the user is usgin Facebook to login, it will user the AuthProvider for facebook
    if (provider === 'FACEBOOK') {
      data = await AuthProvider.Facebook.authAsync(token)
    } else if (provider === 'GOOGLE') {
      data = await AuthProvider.Google.authAsync(token)
    } else {
      res.sendStatus(400)
    }
    
    const customer = await getOrCreateCustomer(data, provider)
    const jwtToken = AuthServices.createToken(customer)
    res.status(200).json({token: jwtToken, customer})

  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

/**
 * Customer.getUserInfo: Get the user informations
 */
export const getUserInfo = async (req, res) => {
  try {
    if (req.user) {
      const userInfo = await me(req.user._id)

      res.status(200).json(userInfo)
    } else {
      res.status(400).json({ message: 'No User' })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}