import React from 'react'
import { Box, Text} from 'react-native-design-utility'
import { Image } from "react-native"

import {images} from '../constants/images'

export default OnboardingLogo = () => {
    return (<Box center>
        <Box mb="sm">
            <Image source={images.houseLogo} />
        </Box>
        <Box mb="sm">
            <Text color="blueDarkest" size="2x1">
            You
            <Text color="black" size="2x1">@</Text>
            <Text color="blue" size="2x1">Store</Text>
            </Text>
        </Box>

        <Text size="sm">Your store, your app, your way</Text>
    </Box>)
}