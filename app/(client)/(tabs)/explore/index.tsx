import CategoryButton from "@/components/CategoryButton";
import ExploreCard from "@/components/ExploreCard";
import { fontSize, fontWeight } from "@/constants/fonts";
import { colors } from "@/constants/theme";
import { useFilterStore } from "@/lib/filter-store";
import { supabase } from "@/lib/supabase";
import { useRouter } from "expo-router";
import { ListFilter, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  FlatList,
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

export type FilterProps = {
  category: string;
  services: string[];
  specializations: string[];
};

export default function ExplorePage() {
  const { filters } = useFilterStore();

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [professionals, setProfessionals] = useState<{ id: string }[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);
  const inset = useSafeAreaInsets();

  useEffect(() => {
    getProfessionals();
  }, []);

  useEffect(() => {
    console.log("active filters:", filters);
    getProfessionals();
  }, [filters]);

  async function getProfessionals() {
    let query = supabase.from("profiles").select("id");

    if (filters.category !== "All") {
      query = query
        .contains("categories", [filters.category])
        .contains("services", filters.services)
        .contains("specializations", filters.specializations);
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(error.message);
    }
    if (data) setProfessionals(data);
  }

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View
        style={[styles.pageHeader]}
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 20, gap: 10 }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 2,
              padding: 10,
              borderRadius: 999,
              flex: 1,
              borderColor: colors.cardBorder,
            }}
          >
            <Search color={colors.primary} style={{ marginRight: 10 }} />
            <TextInput
              style={{ flex: 1, fontSize: 16, color: colors.bodyText }}
              placeholder="Search professionals..."
              placeholderTextColor={"#888"}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              aspectRatio: 1,
              borderRadius: 999,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => router.push("/explore/explore-filter")}
          >
            <ListFilter size={21} color={colors.background} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scrollView}>
        <FlatList
          data={professionals}
          keyExtractor={(pro) => pro.id}
          // showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ExploreCard proId={item.id} />}
          ListHeaderComponent={() => (
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>Professionals Near You</Text>
              {/* <TouchableOpacity>
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity> */}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    // position: "absolute",
    // left: 0,
    // right: 0,
    backgroundColor: colors.background,
    // zIndex: 100,
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
  sectionHeader: { fontWeight: fontWeight.semibold, fontSize: fontSize.title, color: colors.headingText },
  viewAllText: { color: colors.bodyText },
});
