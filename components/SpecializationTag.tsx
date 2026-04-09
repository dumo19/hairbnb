// import { colors } from "@/constants/theme";
import { colors, fontSize, fontWeight } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecializationTag = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        backgroundColor: colors.primaryTint,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 99,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        // borderWidth: 1,
        borderColor: colors.cardBorder,
      }}
    >
      <Text
        style={{
          color: colors.primaryDark,
          fontWeight: fontWeight.medium,
          fontSize: fontSize.secondary,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SpecializationTag;

const styles = StyleSheet.create({});
