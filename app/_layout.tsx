import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(client)" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
