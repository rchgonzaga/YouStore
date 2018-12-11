import { customersApi } from '../api/Api'
import { AsyncStorage } from 'react-native'
import { types, flow } from 'mobx-state-tree'
import { NavigationService } from '../api/NavigationService'

// Token
const TOKEN_KEY = '@youstore/token'

// User model
const UserInfo = types.model('UserInfo', {
    _id: types.identifier,
    firstName: types.string,
    lastName: types.string,
    avatarUrl: types.maybe(types.string),
})

export const CurrentUser = types
    .model('CurrentUser', {
        authToken: types.maybe(types.string),
        info: types.maybe(UserInfo),
    })
    .actions(self => ({

        // Login
        login: flow(function* (providerToken, provider) {
            try {
                const res = yield customersApi
                    .post({
                        token: providerToken,
                        provider,
                    })
                    .json()
                    console.log('resultado', res)

                if (res.token) {
                    self.authToken = res.token
                    yield self.saveToken(res.token)
                    yield self.getUserInfo()
                }
            } catch (error) {
                // Remove this - tests only
                console.log('error', error)
            }
        }),

        // SetupAuth
        setupAuth: flow(function* () {
            yield self.getAuthToken()
            yield self.getUserInfo()
        }),

        // Get AuthToken
        getAuthToken: flow(function* () {
            try {
                const token = yield AsyncStorage.getItem(TOKEN_KEY)

                if (token) {
                    self.authToken = token
                } else {
                    NavigationService.navigate('Auth')
                }
            } catch (error) {
                console.log('error getAuthToken:', error)
            }
        }),

        // Save the token
        saveToken: flow(function*(token) {
            try {
                console.log('saveToken', TOKEN_KEY, token)
                yield AsyncStorage.setItem(TOKEN_KEY, token)
            } catch (error) {
                console.log('error saveToken: ', error)
            }
        }),

        // Get user information passing authToken
        getUserInfo: flow(function* () {
            try {
                if (self.authToken) {
                    const res = yield customersApi
                        .url('/me')
                        .headers({ Authorization: `Bearer ${self.authToken}` })
                        .get()
                        .json()

                    self.info = res
                    console.log(res)
                    NavigationService.navigate('Main')
                }
            } catch (error) {
                console.log('error getUserInfo:', error)
            }
        }),
    }))