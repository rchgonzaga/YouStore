import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'
import React, {Component} from 'react'

const AuthNavigator = createStackNavigator({
        Login: {
            getScreen: () => require('./LoginScreen').default
        },
    }, {
        header: null,
        headerMode: 'none',
        navigationOptions: {
            header: null
        }
    }
)

const TabNavigator = createBottomTabNavigator({
    Home: {
        getScreen: () => require('./HomeScreen').default
    }
})

const MainNavigator = createStackNavigator({
    Tab: TabNavigator,
})

const AppNavigator = createSwitchNavigator({
        Splash: {
            getScreen: () => require('./SplashScreen').default
        },
        Auth: AuthNavigator,
        Main: MainNavigator
    }, {
        initialRouteName: 'Splash'
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default class Navigation extends Component {
    state = {

    }

    render() {
        return (
            <AppContainer>
                <AppNavigator />
            </AppContainer>
        )
    }
}
