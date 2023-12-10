import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={
          {
            title: 'Home',
            headerRight: () => (
              <Link href='/login' asChild>
                <Button title='Login'/>
              </Link>
            )
          }
      }
      />
    </Stack>
  )
}