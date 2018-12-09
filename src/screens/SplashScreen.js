import React, { Component } from 'react'
import { Box, Text} from 'react-native-design-utility'
import { Image } from 'react-native'

import { images } from '../constants/images'
import OnboardingLogo from '../commons/OnboardingLogo'

export default class SplashScreen extends Component {

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth')
    }, 5000)
  }

  render() {
    return (
      <Box f={1} center>  
        <OnboardingLogo />
      </Box>
    )
  }
}