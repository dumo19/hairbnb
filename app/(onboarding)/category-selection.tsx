import { CategoryNames } from "@/constants/categories";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryItem } from "../(tabs)/client/explore/explore-filter";
import { fontSize, fontWeight } from "@/constants/fonts";
import { colors } from "@/constants/colors";

const CategoriesPage = () => {
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  const handleToggle = (cat: string) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((s) => s !== cat) : [...prev, cat],
    );
  };

  return (
    <SafeAreaView style={{paddingHorizontal:20}}>
      <Text style={{fontSize: fontSize.display, color: colors.ink, fontWeight: fontWeight.regular}}>What industries are you in?</Text>
      <Text style={{fontSize: fontSize.body}}>Select all that apply</Text>
      <View style={{flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 20}}>
        {CategoryNames.map((category, i) => (
          // <CategoryCard category={category} key={i}/>
          <CategoryItem
            label={category}
            selected={selectedCats.includes(category)}
            onPress={() => handleToggle(category)}
            key={i}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default CategoriesPage;

const styles = StyleSheet.create({});
