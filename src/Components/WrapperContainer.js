import { View, Text } from 'react-native'
import React, { children } from 'react'
import { StatusBar } from 'expo-status-bar'

const WrapperContainer = ({children,wrapStyle}) => {
  return (
    <View  style={{flex:1,backgroundColor:"green",...wrapStyle}}>
       <StatusBar style="inverted"/>
        {children}
    </View>
  )
}

export default WrapperContainer