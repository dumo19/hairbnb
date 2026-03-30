import {
  CategoryName,
  CategoryNames,
  getServices,
  getSpecializationGroups,
  getSpecializationLabel,
} from "@/constants/categories";
import { colors } from "@/constants/theme";
import { useFilterStore } from "@/lib/filter-store";
import CategoryIcon from "@/utils/CategoryIcon";
import { useRouter } from "expo-router";
import { Check, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type RadioItemProp = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

type SpecializationTagProp = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const RadioItem = ({ label, selected, onPress }: RadioItemProp) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        selected
          ? styles.selectedSpecializationTagContainer
          : styles.specializationTagContainer,
        { flexDirection: "row", gap: 10, alignItems: "center" },
      ]}
    >
      <CategoryIcon
        category={label}
        size={14}
        color={selected ? colors.background : colors.mutedText}
      />
      <Text
        style={
          selected
            ? styles.selectedSpecializationTagLabel
            : styles.specializationTagLabel
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

const SpecializationTag = ({
  label,
  selected,
  onPress,
}: SpecializationTagProp) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        selected
          ? styles.selectedSpecializationTagContainer
          : styles.specializationTagContainer
      }
    >
      <Text
        style={
          selected
            ? styles.selectedSpecializationTagLabel
            : styles.specializationTagLabel
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

const ExploreFilterPage = () => {
  const { filters, setFilters } = useFilterStore();

  const [selectedCategory, setSelectedCategory] = useState<
    CategoryName | "All"
  >(filters.category);
  const [services, setServices] = useState<string[]>(
    selectedCategory != "All" ? getServices(selectedCategory) : [],
  );
  const [selectedServices, setSelectedServices] = useState<string[]>(
    filters.services,
  );
  // const [specializationKeys, setSpecializationKeys] = useState<string[]>([]);
  const [selectedSpecializations, setSelectedSpecializations] = useState<
    string[]
  >(filters.specializations);

  const inset = useSafeAreaInsets();
  const router = useRouter();

  const handleCategoryPress = (category: CategoryName | "All") => {
    setSelectedCategory(category);
    if (category === "All") return;
    setSelectedSpecializations([]);
    setServices(getServices(category));
  };

  const handleServiceTagPress = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSpecializationTagPress = (spec: string) => {
    setSelectedSpecializations((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec],
    );
  };

  const handleApplyFilter = () => {
    // if (!selectedCategory) return;
    setFilters({
      category: selectedCategory ? selectedCategory : "All",
      services: selectedServices,
      specializations: selectedSpecializations,
    });

    router.back();
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        // paddingHorizontal: 20,
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.filterTitle}>Filter Search</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            onPress={handleApplyFilter}
            style={styles.headerButton}
          >
            {/* <Text style={styles.headerButtonText}>Apply</Text> */}
            <Check size={24} color={colors.background} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerButton}
          >
            <X size={24} color={colors.background} />
            {/* <Text style={styles.headerButtonText}>Cancel</Text> */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ backgroundColor: colors.background, paddingHorizontal: 20 }}
      >
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Category</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
          <RadioItem
            key={"All"}
            label={"All"}
            selected={selectedCategory === "All"}
            onPress={() => handleCategoryPress("All")}
          />
          {CategoryNames.map((category) => (
            <RadioItem
              key={category}
              label={category}
              selected={selectedCategory === category}
              onPress={() => handleCategoryPress(category)}
            />
          ))}
        </View>

        {selectedCategory != "All" && (
          <>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.sectionHeader}>
                {selectedCategory} Services
              </Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
              {services.map((service) => (
                <SpecializationTag
                  key={service}
                  label={service}
                  selected={selectedServices.includes(service)}
                  onPress={() => handleServiceTagPress(service)}
                />
              ))}
            </View>
          </>
        )}

        {selectedCategory != "All" && (
          <View style={[styles.sectionHeaderContainer]}>
            <Text style={styles.sectionHeader}>Specializations</Text>
          </View>
        )}

        {selectedCategory != "All" ? (
          <View style={{ paddingBottom: inset.bottom }}>
            {getSpecializationGroups(selectedCategory).map(
              ({ key, options }, index) => (
                <View key={key}>
                  <Text
                    style={[
                      styles.specializationLabel,
                      { marginTop: index === 0 ? 0 : 20 },
                    ]}
                  >
                    {getSpecializationLabel(key)}
                  </Text>
                  <View
                    style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}
                  >
                    {options.map((spec) => (
                      <SpecializationTag
                        key={spec}
                        label={spec}
                        selected={selectedSpecializations.includes(spec)}
                        onPress={() => handleSpecializationTagPress(spec)}
                      />
                    ))}
                  </View>
                </View>
              ),
            )}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreFilterPage;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: "center",
  },
  filterTitle: {
    fontWeight: "700",
    fontSize: 24,
    color: colors.background,
  },
  headerButton: {
    borderWidth: 2,
    borderColor: colors.background,
    padding: 5,
    borderRadius: 10,
  },
  headerButtonText: {
    color: colors.background,
    fontWeight: "700",
    fontSize: 14,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radioOutter: {
    height: 25,
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 2,
    padding: 3,
    borderColor: colors.primary,
  },
  radioInner: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 30,
  },
  radioLabel: { fontWeight: "600", color: colors.bodyText },
  sectionHeaderContainer: {
    // paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  sectionHeader: { fontWeight: "600", fontSize: 18, color: colors.headingText },
  specializationLabel: {
    fontWeight: "500",
    fontSize: 14,
    // color: colors.mutedText,
    color: "#444",
    marginTop: 20,
    marginBottom: 10,
  },
  specializationTagContainer: {
    backgroundColor: colors.background,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  specializationTagLabel: {
    color: colors.mutedText,
  },
  selectedSpecializationTagContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  selectedSpecializationTagLabel: {
    color: colors.background,
  },
  applyButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginVertical: 40,
  },
  applyButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.background,
  },
});
