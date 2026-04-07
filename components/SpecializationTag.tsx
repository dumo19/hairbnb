// import { colors } from "@/constants/theme";
import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SpecializationTag = ({
  title,
}: {
  title: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.linen,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 99,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderWidth: 1,
        borderColor: colors.cardBorder
      }}
    >
      <Text style={{ color: colors.ink, fontWeight: "400" }}>
        {title}
      </Text>
    </View>
  );
};

export default SpecializationTag;

const styles = StyleSheet.create({});
