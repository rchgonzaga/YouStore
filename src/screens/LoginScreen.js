import React, { Component } from 'react'
import {Alert, Animated} from 'react-native'
import { Box, Text} from 'react-native-design-utility'
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton'
import {FacebookAPI} from '../api/Facebook'
import {GoogleAPI} from '../api/Google'

// FIX: Adding this as a custom component
const BoxAnimated = Animated.createAnimatedComponent(Box)

export default class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 700
    }).start()
  }

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 700,
      useNativeDriver:true
    }).start()
  }

  onGooglePress = async () => {
    try {
      const token = await GoogleAPI.loginAsync()
      console.log('token', token)
    } catch (error) {
      console.log(error)
    }
  }

  onFacebookPress = async () => {
    try {
      const token = await FacebookAPI.loginAsync()
      console.log('token', token)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount(){
    Animated.parallel([this.opacityAnim(),this.positionAnim()])
  }

  render() {
    const { opacity } = this.state
    const logoTranslations = this.state.position.interpolate({
      inputRange: [0,1],
      outputRange: [140,0]
    })

    return (
      <Box f={1} center>
        <BoxAnimated style={{flex:1, transform: [{
          translateY: logoTranslations,
        }]}}>
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated style={{
            flex: 0.9, opacity, 
            height: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
          }}>
          <Box f={0.9} w="100%">
            <LoginButton type="google" onPress={this.onGooglePress}>Login with Google</LoginButton>
            <LoginButton type="facebook" onPress={this.onFacebookPress}>Login with Facebook</LoginButton>
          </Box>
        </BoxAnimated>

      </Box>
    )
  }
}