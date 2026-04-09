import { ProContext } from "@/context/ProContext";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const ProfessionalLayout = () => {
  const { proId } = useLocalSearchParams();
  const normalizedProId = typeof proId === "string" ? proId : proId?.[0];
  console.log(proId);
  if (!normalizedProId) return;

  return (
    <ProContext.Provider value={{ proId: normalizedProId }}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="portfolio-gallery"
          options={{ headerShown: false, presentation: "modal"}}
          
        />
      </Stack>
    </ProContext.Provider>
  );
};

export default ProfessionalLayout;

const styles = StyleSheet.create({});
