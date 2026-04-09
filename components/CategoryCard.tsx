import { colors } from "@/constants/theme";
import CategoryIcon from "@/utils/CategoryIcon";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CategoryCard({ category }: { category: string }) {
  // console.log(selectedCategory);

  return (
    <View style={styles.selectedContainer}>
      <CategoryIcon category={category} size={16} color={colors.background} />
      <Text style={styles.selectedText}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 40,
    gap: 5,
  },
  selectedText: { fontSize: 16, fontWeight: "500", color: colors.background },
});
