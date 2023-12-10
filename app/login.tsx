import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function login() {
  return (
    <View>
      <Stack.Screen options={{title:'sign-in'}}/>
      <Text>login</Text>
    </View>
  )
}