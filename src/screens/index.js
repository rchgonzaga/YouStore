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
import ShoppingCartIcon from '../components/ShoppingCartIcon'

const primaryHeader = {
    headerTintColor: theme.color.blueDarkest,
    headerStyle: {
        backgroundColor: theme.color.blueDarkest
    },
    headerTitleStyle: {
        fontWeight: '400',
    },
}

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

const ShoppingCartNavigator = createStackNavigator(
    {
        ShoppingCart: {
            getScreen: () => require('./ShoppingCartScreen').default,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: theme.color.white,
                }
            }
        }
    }
)

const HomeStack = createStackNavigator(
    {
        Home: { getScreen: () => require('./HomeScreen').default },
        Category: { getScreen: () => require('./CategoryScreen').default },
        ShoppingCart: {getScreen: () => require('./ShoppingCartScreen').default}
    },
    {
        navigationOptions: { ...primaryHeader }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
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
        // FIXME: Check this
        navigationOptions: {
            header: null,
            headerMode: 'none',
            navigationOptions: {
                header: null
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Tab: TabNavigator
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
