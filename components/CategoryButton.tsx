import { colors } from "@/constants/theme";
import CategoryIcon from "@/utils/CategoryIcon";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryButton({
  category,
  selectedCategory,
  setSelectedCategory,
}: {
  category: string;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  // console.log(selectedCategory);
  const isSelected = selectedCategory === category;

  function handlePress() {
    setSelectedCategory(category);
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={isSelected ? styles.selectedContainer : styles.defaultContainer}
    >
      <CategoryIcon
        category={category}
        size={16}
        color={isSelected ? colors.background : colors.bodyText}
      />
      <Text style={isSelected ? styles.selectedText : styles.defaultText}>
        {category}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 40,
    gap: 5,
  },
  defaultContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.cardBorder,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 40,
    gap: 5,
  },
  selectedText: { fontSize: 16, fontWeight: "700", color: colors.background },
  defaultText: { fontSize: 16, fontWeight: "400", color: colors.bodyText },
});
