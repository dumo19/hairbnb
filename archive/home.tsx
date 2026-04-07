import FeaturedCard from "@/components/FeaturedCard";
import { colors } from "@/constants/theme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomePage = () => {
  const inset = useSafeAreaInsets();

  return (
    <SafeAreaView edges={[]} style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingTop: inset.top }}
        style={styles.scrollView}
      >
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Featured Work</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 15,
          }}
        >
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </ScrollView>

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Recent Work</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollView: { flex: 1 },
  sectionHeaderContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  sectionHeader: { fontWeight: "600", fontSize: 18, color: colors.headingText },
  viewAllText: { color: colors.bodyText },
});
