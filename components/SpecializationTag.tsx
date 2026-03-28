import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecializationTag = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        backgroundColor: "#FFE0DB",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1.25,
        borderColor: colors.primary
      }}
    >
      <Text style={{fontSize: 12, color: colors.primary, fontWeight: "700"}}>{title}</Text>
    </View>
  );
};

export default SpecializationTag;

const styles = StyleSheet.create({});
