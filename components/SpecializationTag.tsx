import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecializationTag = ({ title, border }: { title: string, border: boolean }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderWidth: border ? 1 : 0,
        borderColor: colors.cardBorder,
      }}
    >
      <Text style={{ fontSize: 12, fontWeight: "500" , color: colors.bodyText }}>
        {title}
      </Text>
    </View>
  );
};

export default SpecializationTag;

const styles = StyleSheet.create({});
