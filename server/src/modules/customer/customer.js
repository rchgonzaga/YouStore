/**
 * Customer interaction with mongoDB
 */

import Customer from './customer.model';
import { buildCustomerInfo } from './buildCustomerInfo';

/**
 * Try to get an existent user or create one in mongoDB
 * @param {*} info
 * @param {*} providerName 
 */
export const getOrCreateCustomer = async (info, providerName) => {
  const customerInfo = buildCustomerInfo(info, providerName);

  try {
    // Try to find the customer by email
    const _retCustomer = await Customer.findOne({ email: customerInfo.email });
    const { provider, ...userInfo } = customerInfo;
    
    // If we don't find the customer, we create one and return it back
    if (!_retCustomer) {
      const _newCustomer = await Customer.create({
        ...userInfo,
        provider: [provider],
      });

      return _newCustomer;
    }

    // Check if the customer is already there by searching using uid and proiver type
    const providerExist = _retCustomer.provider.find(
      el =>
        el.uid === customerInfo.provider.uid &&
        el.type === customerInfo.provider.type,
    );
    
    // if the user existes the provider as well, retur it
    if (providerExist) {
      return _retCustomer;
    }
    
    // Add the proviter to user, in case the user has two or more providers [GOOGLE, FACEBOOK, GITHUB, etc]
    _retCustomer.provider.push(customerInfo.provider);

    // And save it
    await _retCustomer.save();

    return _retCustomer;
  } catch (error) {
    throw error;
  }
};