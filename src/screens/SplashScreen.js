import React, { Component } from 'react'
import { inject } from 'mobx-react/native'
import OnboardingLogo from '../commons/OnboardingLogo'
import { Box } from 'react-native-design-utility'

@inject('authStore')
class SplashScreen extends Component {
  state = {}

  /**
   * Mounted
   */
  componentDidMount() {
    this.checkAuth()
  }

  /**
   * checkAuth: When the component is mounted, call this to check if the user is already logged or not
   */
  checkAuth = async () => {
    setTimeout(async () => {
      await this.props.authStore.setupAuth()
    }, 2000)
  }

  /**
   * Render
   */
  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    )
  }
}

export default SplashScreen