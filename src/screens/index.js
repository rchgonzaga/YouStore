import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation'
  import React, { Component } from 'react'
  
  import { NavigationService } from '../api/NavigationService'
  import { theme } from '../constants/theme'
  import TabBar from '../components/TabBar'

const AuthNavigator = createStackNavigator(
    {
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

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            getScreen: () => require('./HomeScreen').default
        },
        List: {
            getScreen: () => require('./ListScreen').default,
        },
        Stores: {
            getScreen: () => require('./StoresScreen').default,
        },
        Order: {
            getScreen: () => require('./OrderScreen').default,
        }
    },
    {
        tabBarComponent: props => <TabBar {...props} />,
        navigationOptions: {
            headerTintColor: theme.color.blueDarkest,
            headerStyle: {
                backgroundColor: theme.color.blueDarkest,
                elevation: null
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Tab: TabNavigator,
    },
    {
    }
)

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

const AppContainer = createAppContainer(AppNavigator)

export default class Navigation extends Component {
    state = {

    }

    render() {
        // NavigationService.setTopLevelNavigator(createAppContainer)
        return (
            <AppContainer 
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                }}>
                <AppNavigator />
            </AppContainer>
        )
    }
}
