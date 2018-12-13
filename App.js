import React from 'react'
import { ActivityIndicator, UIManager } from 'react-native'

import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility'
import Naviation from './src/screens'
import { images, tabBarIcons, productImgs } from './src/constants/images'
import { cacheImages } from './src/util/cacheImages'
import {Provider} from 'mobx-react/native'
import { store } from './src/stores'

import { theme } from './src/constants/theme'
UIManager.setLayoutAnimationEnabledExperimental 
  && UIManager.setLayoutAnimationEnabledExperimental(true)

export default class App extends React.Component {
  
  state = {
    isReady: false
  }

  componentDidMount() {
    this.cacheAssets()
  }

  /**
   * Cache all the images so that the user can't see any dalay using the app
   */
  cacheAssets = async () => {

    const imagesAssets = cacheImages([
      ...Object.values(images),
      ...Object.values(tabBarIcons.active),
      ...Object.values(tabBarIcons.inactive),
      ...Object.values(productImgs),
    ])

    await Promise.all([...imagesAssets])
    this.setState({
      isReady: true
    })
  }

  render() {
    if(!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large"/>
        </Box>
      )
    }

    return (
      <Provider {...store}>
        <UtilityThemeProvider theme={theme}>
          <Naviation/>
        </UtilityThemeProvider>
      </Provider>
    );
  }
}