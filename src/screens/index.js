import React, {Component} from 'react'
import { NavigationService } from '../api/NavigationService';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

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
        // NavigationService.setTopLevelNavigator(createAppContainer)
        return (
            <AppContainer 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}>
                <AppNavigator />
            </AppContainer>
        )
    }
}
