import { RoleProvider } from "@/context/RoleContext";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <RoleProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" /> */}
        {/* <Stack.Screen name="(tabs)" /> */}
      </Stack>
    </RoleProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
