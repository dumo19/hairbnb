import { CategoryName, CategoryNames, getServices } from "@/constants/categories";
import { colors } from "@/constants/theme";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExploreFilterPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | undefined>(undefined);
  const [services, setServices] = useState<string[]>([])

  useEffect(() => {
    if (selectedCategory) setServices(getServices(selectedCategory))
    
  }, [selectedCategory])

  console.log(services)

  return (
    <SafeAreaView style={{ paddingHorizontal: 20 }}>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>Category</Text>
      </View>
      <View style={{ flexDirection: "column", flexWrap: "wrap", rowGap: 5 }}>
        {CategoryNames.map((category) => (
          <Pressable
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                height: 25,
                aspectRatio: 1,
                borderRadius: 20,
                borderWidth: 2,
                padding: 3,
                borderColor: colors.primary,
              }}
            >
              {selectedCategory === category && (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.primary,
                    borderRadius: 30,
                  }}
                />
              )}
            </View>
            <Text style={{ fontWeight: "600", color: colors.bodyText }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>{selectedCategory} Services</Text>
      </View>
       <View style={{ flexDirection: "column", flexWrap: "wrap", rowGap: 5 }}>
        {services.map((category) => (
          <Pressable
            key={category}
            // onPress={() => setSelectedCategory(category)}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                height: 25,
                aspectRatio: 1,
                borderRadius: 20,
                borderWidth: 2,
                padding: 3,
                borderColor: colors.primary,
              }}
            >
              {selectedCategory === category && (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors.primary,
                    borderRadius: 30,
                  }}
                />
              )}
            </View>
            <Text style={{ fontWeight: "600", color: colors.bodyText }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default ExploreFilterPage;

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    // paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  sectionHeader: { fontWeight: "600", fontSize: 18, color: colors.headingText },
});
