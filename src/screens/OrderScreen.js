import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { theme } from '../constants/theme'


class OrderScreen extends Component {
    // FIXME: this has to go to index.js file
    static navigationOptions = {
        title: 'Order',
        headerTintColor: theme.color.white,
        headerStyle: {
            backgroundColor: theme.color.blueDarkest
        },
        headerTitleStyle: {
            fontWeight: '400',
        }
    }
    state = {};
    render() {
        return (
            <Box f={1} center>
                <StatusBar barStyle="light-content" />
                <Text>Order Screen</Text>
            </Box>
        );
    }
}

export default OrderScreen;