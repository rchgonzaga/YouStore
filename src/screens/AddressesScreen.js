import React, { Component } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Box, Text } from 'react-native-design-utility'
import { EvilIcons } from '@expo/vector-icons'
import { inject } from 'mobx-react/native'

import { theme } from '../constants/theme'
import Button from '../commons/Button'

@inject('authStore')
class AddressesScreen extends Component {
    static navigationOptions = {
        title: 'Endereços',
    }

    state = {}

    handleAddAddressPress = () => {
        this.props.navigation.navigate('AddressForm')
    }

    renderIfEmpty = () => (
        <Box f={1} center bg="white" px="md">
            <StatusBar barStyle="dark-content" />
            <Box center mb="md">
                <EvilIcons name="location" color={theme.color.black} size={200} />
            </Box>
            <Box center mb="md">
                <Text bold size="lg">Adicionar endereço</Text>
                <Text size="sm" color="greyLight">Nenhum endereço informado</Text>
            </Box>
            <Box w="100%">
                <Button style={styles.button} onPress={this.handleAddAddressPress}>
                    <Text bold color="white">Adicionar endereço</Text>
                </Button>
            </Box>
        </Box>
    )
    render() {
        if (this.props.authStore.info.addressesIsEmpty) {
            return this.renderIfEmpty()
        }
        return (
            <Box f={1} center bg="white" px="md">
                <StatusBar barStyle="dark-content" />
                <Text>Você ainda não informou nenhum endereço!</Text>
            </Box>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.color.green,
    },
})
export default AddressesScreen