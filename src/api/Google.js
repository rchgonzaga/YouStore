import { Google, Constants} from 'expo'

const loginAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.googleAppId.android,
        iosClientId: Constants.manifest.extra.googleAppId.ios,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

export const GoogleAPI = {
    loginAsync
}