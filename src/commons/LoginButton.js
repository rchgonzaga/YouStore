import React from 'react'
import {Box, Text} from 'react-native-design-utility'
import {TouchableOpacity, Image} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import {images} from '../constants/images'
import { theme } from '../constants/theme';

const bgColor =  type => {
  switch(type) {
    case 'google':
      return 'googleBlue'
    case 'facebook':
      return 'facebookBlue'
    default:
      return 'white'
  }
}

export default LoginButton = ({children, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box 
        bg={bgColor(type)} 
        w="80%" 
        self="center" 
        p="2xs" 
        shadow={0} 
        radius="xs" 
        dir="row" 
        align="center" 
        mb="sm"
      >
        <Box mr="sm"><Box w={32} h={32} bg="white" radius="xs" center>
          {type === 'google' && <Image source={images.googleIcon} style={{
            width: 25,
            height: 25
          }} />}
          {type === 'facebook' && <FontAwesome name='facebook' color={theme.color.facebookBlue} size={28}/>}
        </Box></Box>

        <Text color="white">
          {children}
        </Text>
        
      </Box>
    </TouchableOpacity>
  )
} 

