import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const OnboardingStartPage = () => {
  const router = useRouter()
  return (
    <SafeAreaView>
      <Text>Welcome to HairBnB</Text>
      <TouchableOpacity onPress={() => router.push('/category-selection')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnboardingStartPage

const styles = StyleSheet.create({})