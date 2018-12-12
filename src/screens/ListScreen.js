import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { theme } from '../constants/theme'

class ListScreen extends Component {
    // FIXME: this has to go to index.js file
    static navigationOptions = {
        title: 'List',
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
                <Text>List Screen</Text>
            </Box>
        );
    }
}

export default ListScreen;