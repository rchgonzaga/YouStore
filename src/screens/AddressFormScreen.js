import React, { Component } from 'react'
import { StatusBar, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Box, Text } from 'react-native-design-utility'
import { observer, inject } from 'mobx-react/native'
import { observable, action } from 'mobx'

import CloseBtn from '../commons/CloseBtn'
import Input from '../commons/Input'
import Button from '../commons/Button'
import { theme } from '../constants/theme'
import { buildAddress } from '../util/buildAddress'

@inject('authStore')
@observer
class AddressFormScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Endereço',
        headerLeft: (
            <CloseBtn left size={25} onPress={() => navigation.goBack(null)} />
        ),
    })
    state = {}

    @observable
    streetName = ''

    @observable
    postalCode = ''

    @observable
    city = ''

    @observable
    address = null

    @observable
    isSaving = false

    goToSearch = () => {
        this.props.navigation.navigate('AutocompleteAddress', {
            searchAddress: this.searchAddress,
        })
    }

    @action.bound
    searchAddress(value) {
        this.props.navigation.goBack(null)


        // console.log('\n =====================================')
        // console.log(value)
        // console.log('\n =====================================')

        const address = buildAddress(value)

        console.log('\n =====================================')
        console.log(address)
        console.log('\n =====================================')

        this.streetName = address.street
        this.postalCode = address.postalCode
        this.city = address.city

        this.address = address
    }


    @action.bound
    async saveAddress() {
        this.isSaving = true
        try {
            await this.props.authStore.info.createAddress(this.address)
            this.props.navigation.goBack(null)
        } catch (error) {
            console.log('error', error)
        }
    }

    render() {
        if (this.isSaving) {
            return (
                <Box f={1} bg="white" center>
                    <ActivityIndicator color={theme.color.blueDarker} size="large" />
                </Box>
            )
        }
        return (
            <Box f={1} bg="white" p="sm">
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <Box mb="sm">
                        <Input
                            placeholder="Endereço"
                            editable={false}
                            onPress={this.goToSearch}
                            value={this.streetName}
                        />
                        <Input placeholder="Complemento # (optional)" />
                        <Box dir="row">
                            <Box f={1}>
                                <Input
                                    placeholder="CEP"
                                    editable={false}
                                    value={this.postalCode}
                                />
                            </Box>
                            <Box w={theme.space.xs} />
                            <Box f={1}>
                                <Input
                                    placeholder="Cidade"
                                    editable={false}
                                    value={this.city}
                                />
                            </Box>
                        </Box>
                        <Input
                            placeholder="Instruções para entrega (optional)"
                            containerStyle={{ height: 100 }}
                            multiline
                        />
                    </Box>

                    <Button
                        disabled={!this.address}
                        disabledStyle={styles.buttonDisabled}
                        style={styles.button}
                        onPress={this.saveAddress}
                    >
                        <Text bold color="white">Salvar</Text>
                    </Button>
                </ScrollView>
            </Box>
        )
    }
}

const styles = StyleSheet.create({
    buttonDisabled: {
      backgroundColor: theme.color.greyLight,
      borderColor: theme.color.greyLight,
    },
    button: {
      backgroundColor: theme.color.green,
    },
  })

export default AddressFormScreen