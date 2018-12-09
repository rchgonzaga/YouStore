import React, { Component } from 'react'
import { Box, Text} from 'react-native-design-utility'
import { Image } from 'react-native'

import { images } from '../constants/images'

export default class SplashScreen extends Component {

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 2000)
  }

  render() {
    return (
      <Box f={1} center>
        
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

      </Box>
    )
  }
}