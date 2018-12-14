import React, { Component } from 'react'
import { StatusBar, ScrollView, StyleSheet } from 'react-native'
import { Box, Text } from 'react-native-design-utility'

import CloseBtn from '../commons/CloseBtn'
import Input from '../commons/Input'
import Button from '../commons/Button'
import { theme } from '../constants/theme'

class AddressFormScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Endereço',
        headerLeft: (
            <CloseBtn left size={25} onPress={() => navigation.goBack(null)} />
        ),
    })
    state = {}
    render() {
        return (
            <Box f={1} bg="white" p="sm">
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <Box mb="sm">
                        <Input placeholder="Edereço" />
                        <Input placeholder="Complemento # (optional)" />
                        <Box dir="row">
                            <Box f={1}>
                                <Input placeholder="CEP" />
                            </Box>
                            <Box w={theme.space.xs} />
                            <Box f={1}>
                                <Input placeholder="Cidade" />
                            </Box>
                        </Box>
                        <Input
                            placeholder="Instruções para entrega (optional)"
                            containerStyle={{ height: 100 }}
                            multiline
                        />
                    </Box>

                    <Button disabled disabledStyle={styles.buttonDisabled}>
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
})

export default AddressFormScreen