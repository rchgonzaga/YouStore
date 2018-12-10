/**
 * Routes for Customers
 */
import { Router } from 'express'
import { customerAuth } from './customer'
import { create, getUserInfo } from './customer.controller'

// Espress router initiation
const routes = Router()

/**
 * Call Customer.create from custom.controller.js
 */
routes.post('/', create)
routes.get('/me', customerAuth, getUserInfo)

// Export
export default routes
