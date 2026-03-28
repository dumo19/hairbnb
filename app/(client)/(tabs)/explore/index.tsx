import CategoryButton from "@/components/CategoryButton";
import ExploreCard from "@/components/ExploreCard";
import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { ListFilter, Search } from "lucide-react-native";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function ExplorePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = "Saint Paul, MN";
  const inset = useSafeAreaInsets();
  console.log(selectedCategory);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView
        style={[styles.scrollView, { paddingTop: headerHeight }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Professionals Near You</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />

        <Button title="user page" onPress={() => router.push("/explore/1")} />
      </ScrollView>
      <View
        style={[styles.pageHeader, { top: inset.top }]}
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 2,
              padding: 10,
              borderRadius: 15,
              flex: 1,
              borderColor: colors.cardBorder,
            }}
          >
            <Search color={colors.primary} style={{ marginRight: 10 }} />
            <TextInput
              style={{ flex: 1, fontSize: 16, color: colors.bodyText }}
              placeholder="Search professionals, services..."
              placeholderTextColor={"#888"}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              aspectRatio: 1,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListFilter size={21} color={colors.background} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 10,
            marginTop: 15,
          }}
        >
          <CategoryButton
            category={"All"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Hair"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Makeup"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Skincare"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Lashes & Brows"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Nails"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Hair Removal"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"PMU"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Tattoo & Piercing"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            category={"Wellness"}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    zIndex: 100,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.cardBorder,
  },
  container: { flex: 1, backgroundColor: colors.background },
  scrollView: { flex: 1 },
  sectionHeaderContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  sectionHeader: { fontWeight: "600", fontSize: 18, color: colors.headingText },
  viewAllText: { color: colors.bodyText },
});
