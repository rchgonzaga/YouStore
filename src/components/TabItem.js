import React, { PureComponent } from 'react'
import { tabBarIcons } from '../constants/images'
import { Box, Text } from 'react-native-design-utility'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

class TabItem extends PureComponent {
  handlePress = () => {
    this.props.navigation.navigate(this.props.routeName)
  }

  render() {
    const { routeName, isActive } = this.props

    const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName]
    return (
      <Box f={1} pt={10}>
        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Box mb={3}>
            <Image source={icon} />
          </Box>
          <Box>
            <Text size="xs" ls={0.12} color="greyDark" lowercase>
              {routeName}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    )
  }
}

// FIXME: Remove this from here
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default TabItem