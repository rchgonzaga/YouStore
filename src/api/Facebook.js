import { Facebook, Constants} from 'expo'

const permissions = ['public_profile', 'email']

const loginAsync = async () => {
    try {
        const {type, token} = await Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, {permissions})

        if(type === 'success') {
            return Promise.resolve(token)
        }

        return Promise.reject('Error trying to login.')

    } catch (error) {
        return Promise.reject(error)
    } 
}

export const FacebookAPI = {
    loginAsync
}