/**
 * Auth - Module responsible for create, validade and verify JWTs
 */
import jwt from 'jsonwebtoken'

// JWT Configurations
const JWT_SECRET = 'youstoresecret!change!'
const JWT_OPTS = {
  issuer: 'YouStore'
}

/**
 * Function responsible for creating a new 
 * Required data: user
 * Optional data: none
 */
const createToken = user => {

    // Check to see fi it has a user and a users id
    if (!user && !user._id) {
    return null
    }

    // create the payload
    const payload = {
        id: user._id,
    }

    // return the JWT signed
    return jwt.sign(payload, JWT_SECRET, JWT_OPTS)
}

/**
 * Function responsible check a given token and retur if it's valid or not
 * Required data: token
 * Optional data: none
 */
const verifyToken = token => {
    return jwt.verify(token, JWT_SECRET, JWT_OPTS)
}

/**
 * Function responsible check a given token and retur if it's valid or not
 * Required data: token
 * Optional data: none
 */
const getTokenFromHeaders = req => {

    // Get authorization from req.readers
    const token = req.headers.authorization

    // check if there is a token, if not return null
    if (token) {
        const arr = token.split(' ')

        // Checks for Bearer and virify the second parte of the string with verifyToken, returnig it
        // - If it wasn't valid, retur null 
        if (arr[0] === 'Bearer' && arr[1]) {
            try {
                return verifyToken(arr[1])
            } catch (error) {
                return null
            }
        }
    }

    return null
}

// Export
export const AuthServices = {
  createToken,
  verifyToken,
  getTokenFromHeaders,
}