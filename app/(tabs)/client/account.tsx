import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRole } from '@/context/RoleContext'

const AccountPage = () => {
  const {role, switchRole} = useRole()
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>AccountPage</Text>
      <TouchableOpacity onPress={switchRole}>
        <Text>Switch Role</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AccountPage

const styles = StyleSheet.create({})