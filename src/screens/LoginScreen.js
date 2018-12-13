import {GoogleAPI} from '../api/Google'
import React, { Component } from 'react'
import {FacebookAPI} from '../api/Facebook'
import {Alert, Animated} from 'react-native'
import LoginButton from '../commons/LoginButton'
import { inject } from 'mobx-react/native'
import { Box, Text} from 'react-native-design-utility'
import OnboardingLogo from '../commons/OnboardingLogo'

// FIX: Adding this as a custom component
const BoxAnimated = Animated.createAnimatedComponent(Box)

@inject('authStore')
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
      await this.props.authStore.login(token, 'GOOGLE')
    } catch (error) {
      console.log(error)
    }
  }

  onFacebookPress = async () => {
    try {
      const token = await FacebookAPI.loginAsync()
      await this.props.authStore.login(token, 'FACEBOOK')
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
            <LoginButton type="google" onPress={this.onGooglePress}>Logar com Google</LoginButton>
            <LoginButton type="facebook" onPress={this.onFacebookPress}>Logar com Facebook</LoginButton>
          </Box>
        </BoxAnimated>

      </Box>
    )
  }
}