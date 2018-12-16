/**
 * Starting point for the API
 */
import './config/db';
import express from 'express';
import { CustomerRoutes, AddressRoutes } from './modules';
import middlewaresConfig from './config/middlewares';

const app = express();
middlewaresConfig(app);

/**
 * Welcome route
 */
app.get('/', (req, res) => {
  res.send('Welcome');
});

/**
 * Adding routes for Controllers
 * Required data: CustomerRoutes
 * Optional data: none
 * TODO:
 * - [] - Make this more dynamic
 */
app.use('/api/v1/customers', CustomerRoutes);
app.use('/api/v1/addresses', AddressRoutes);

app.listen(3000, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listen on port 3000`);
  }
});
