/**
 * Customer interaction with mongoDB
 */

import Customer from './customer.model'
import { AuthServices } from '../../services/Auth'
import { buildCustomerInfo } from './buildCustomerInfo'

/**
 * Function responsible for login a customer
 * Required data: req,res,next 
 * Optional data: none
 */
export const customerAuth = async (req, res, next) => {
    const token = AuthServices.getTokenFromHeaders(req)

    // checks for a token, if we don't have one, return an error
    if (!token) {
        req.user = null
        return res.sendStatus(401)
    }

    // Find the customer using the id that is inside the token
    const customer = await Customer.findById(token.id)

    // If we don't find the customer, return 401
    if (!customer) {
        req.user = null
        return res.sendStatus(401)
    }

    // If we found a customer, return it and call next()
    req.user = customer
    return next()
}

/**
 * Try to get an existent user or create one in mongoDB
 * Required data: info, providerName
 * Optional data: none
 */
export const getOrCreateCustomer = async (info, providerName) => {
  const customerInfo = buildCustomerInfo(info, providerName)

  try {
    // Try to find the customer by email
    const _retCustomer = await Customer.findOne({ email: customerInfo.email })
    const { provider, ...userInfo } = customerInfo
    
    // If we don't find the customer, we create one and return it back
    if (!_retCustomer) {
      const _newCustomer = await Customer.create({
        ...userInfo,
        provider: [provider],
      })

      return _newCustomer
    }

    // Check if the customer is already there by searching using uid and proiver type
    const providerExist = _retCustomer.provider.find(
      el =>
        el.uid === customerInfo.provider.uid &&
        el.type === customerInfo.provider.type,
    )
    
    // if the user existes the provider as well, retur it
    if (providerExist) {
      return _retCustomer
    }
    
    // Add the proviter to user, in case the user has two or more providers [GOOGLE, FACEBOOK, GITHUB, etc]
    _retCustomer.provider.push(customerInfo.provider)

    // And save it
    await _retCustomer.save()

    return _retCustomer
  } catch (error) {
    throw error
  }
}

/**
 * Get user infor if it exists
 * Required data: userId
 * Optional data: none 
 */
export const me = async userId => {
    try {
      const user = await Customer.findById(userId)
  
      if (!user) {
        throw new Error('User not found.')
      }
  
      return user
    } catch (error) {
      throw error
    }
  }