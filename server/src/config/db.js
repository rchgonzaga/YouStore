/**
 * MongoDB connection configuration
 */

import mongoose from 'mongoose';
import { DB_URL } from '../constants';

/**
 * Configure mongoose Promise to use the global one and set debug to true
 * - As this is the first version and intended just to run at first, we're going to set a list of
 * - todos here, to make sure to comeback and refactor the whole functions if needed.
 * TODO: 
 * - [] - Set all the configuration to a specific file
 */
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

try {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true,
    },
  );
} catch (error) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true,
  });
}

// - Connection
mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', e => {
    throw e;
  });
