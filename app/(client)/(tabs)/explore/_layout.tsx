import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ExploreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="[proId]" options={{headerShown: false}}/>
      <Stack.Screen name="explore-filter" options={{headerShown: false, presentation: 'modal'}}/>

    </Stack>
  )
}

export default ExploreLayout

const styles = StyleSheet.create({})