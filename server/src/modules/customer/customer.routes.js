/**
 * Routes for Customers
 */
import { Router } from 'express';
import { create } from './customer.controller';

// Espress router initiation
const routes = Router();

/**
 * Call Customer.create from custom.controller.js
 */
routes.post('/', create);

// Export
export default routes;
