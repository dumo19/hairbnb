import {
  CategoryName,
  CategoryNames,
  getServices,
  getSpecializationGroups,
  getSpecializationLabel,
} from "@/constants/categories";
import { fontSize, fontWeight } from "@/constants/theme";
import { colors } from "@/constants/theme";
import { useFilterStore } from "@/lib/filter-store";
import CategoryIcon from "@/utils/CategoryIcon";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
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

type CategoryItemProp = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

type SpecServiceTagProp = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export const CategoryItem = ({ label, selected, onPress }: CategoryItemProp) => {
  const isSelected = {
    container: styles.selectedTagContainer,
    label: styles.selectedTagLabel,
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        selected ? styles.selectedTagContainer : styles.TagContainer,
        { flexDirection: "row", gap: 10, alignItems: "center" },
      ]}
    >
      <CategoryIcon
        category={label}
        size={fontSize.secondary + 2}
        color={selected ? colors.primaryDark : colors.bodyText}
      />
      <Text style={selected ? styles.selectedTagLabel : styles.TagLabel}>
        {label}
      </Text>
    </Pressable>
  );
};

const SpecServiceTag = ({ label, selected, onPress }: SpecServiceTagProp) => {
  return (
    <Pressable
      onPress={onPress}
      style={selected ? styles.selectedTagContainer : styles.TagContainer}
    >
      <Text style={selected ? styles.selectedTagLabel : styles.TagLabel}>
        {label}
      </Text>
    </Pressable>
  );
};

/**
 * search filter page for the explore page
 * @returns search filter page
 */
const ExploreFilterPage = () => {
  const { filters, setFilters } = useFilterStore();

  // state for the selected category
  const [selectedCat, setSelectedCat] = useState<CategoryName | "All">(
    filters.category,
  );

  // state for the selected services
  const [services, setServices] = useState<string[]>(
    selectedCat != "All" ? getServices(selectedCat) : [],
  );

  // state for the selected services
  const [selectedServ, setSelectedServ] = useState<string[]>(filters.services);

  // state for the selected specializations
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>(
    filters.specializations,
  );

  const inset = useSafeAreaInsets();
  const router = useRouter();

  /**
   * helper function that selecteds a category and updates it in the
   * selected category state
   * @param category category selected
   * @returns
   */
  const handleCategoryPress = (category: CategoryName | "All") => {
    setSelectedCat(category);
    setSelectedServ([])
    setSelectedSpecs([]);
    
    if (category === "All") return;
    setServices(getServices(category));
  };

  /**
   * helper function to toggle a service when it is pressed.
   * Either adds the service to the service state array
   * or remove it.
   * @param service The service selected
   */
  const handleServiceTagPress = (service: string): void => {
    setSelectedServ((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  /**
   * helper function to toggle a specialization when it is pressed.
   * Either adds the specialization to the specialization state array
   * or remove it.
   * @param spec The specialization selected
   */
  const handleSpecServiceTagPress = (spec: string): void => {
    setSelectedSpecs((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec],
    );
  };

  /**
   * helper function that sets the filters using the selected items using the function
   * provided by the useFilterStore hook
   */
  const handleApplyFilter = (): void => {
    setFilters({
      category: selectedCat ? selectedCat : "All",
      services: selectedServ,
      specializations: selectedSpecs,
    });

    router.back();
  };

  /**
   * Helper function to reset the filters by clearing the sevice and
   * specialization states and setting the category to "All"
   */
  const handleClearFilter = (): void => {
    setSelectedCat("All")
    setSelectedServ([]),
    setSelectedSpecs([])
  }

  /**
   * JSX element for the page header of the search filter page
   * @returns JSX element
   */
  const FilterPageHeader = (): React.JSX.Element => {
    return (
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.headerButton}
          >
            <ChevronLeft size={24} color={colors.headingText} />
          </TouchableOpacity>
          <Text style={styles.filterTitle}>Filters</Text>
        </View>
        <TouchableOpacity onPress={handleClearFilter} style={styles.clearAll}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * JSX element where a use can select a category for a service or provider
   * that they are looking for. Only one category can be selected at a time
   * @returns JSX element to select a category
   */
  const CategorySection = (): React.JSX.Element => {
    return (
      <>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Category</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          <CategoryItem
            key={"All"}
            label={"All"}
            selected={selectedCat === "All"}
            onPress={() => handleCategoryPress("All")}
          />
          {CategoryNames.map((category) => (
            <CategoryItem
              key={category}
              label={category}
              selected={selectedCat === category}
              onPress={() => handleCategoryPress(category)}
            />
          ))}
        </View>
      </>
    );
  };

  /**
   * JSX element for the search filter to show a list of services of
   * a given category only when clicked. The user can select as many
   * services as desired.
   * @returns a JSX element to select services options when the
   * selected category is not "All", else returns null
   */
  const ServicesSection = (): React.JSX.Element | null => {
    return selectedCat != "All" ? (
      <>
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{selectedCat} Services</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {services.map((service) => (
            <SpecServiceTag
              key={service}
              label={service}
              selected={selectedServ.includes(service)}
              onPress={() => handleServiceTagPress(service)}
            />
          ))}
        </View>
      </>
    ) : null;
  };

  /**
   * JSX element for the search filter to show a list of specializations of
   * a given category only when clicked. The user can select as many
   * specializations as desired.
   * @returns a JSX element to select specialization options when the
   * selected category is not "All", else returns null
   */
  const SpecializationsSection = (): React.JSX.Element | null => {
    return selectedCat != "All" ? (
      <>
        <View style={[styles.sectionHeaderContainer]}>
          <Text style={styles.sectionHeader}>Specializations</Text>
        </View>

        <View style={{ paddingBottom: inset.bottom }}>
          {getSpecializationGroups(selectedCat).map(
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
                  style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}
                >
                  {options.map((spec) => (
                    <SpecServiceTag
                      key={spec}
                      label={spec}
                      selected={selectedSpecs.includes(spec)}
                      onPress={() => handleSpecServiceTagPress(spec)}
                    />
                  ))}
                </View>
              </View>
            ),
          )}
        </View>
      </>
    ) : null;
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.pageContainer}>
      <FilterPageHeader />
      <ScrollView style={styles.scrollContainer}>
        <CategorySection />
        <ServicesSection />
        <SpecializationsSection />
      </ScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          onPress={handleApplyFilter}
          style={styles.footerButton}
        >
          <Text style={styles.footerButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ExploreFilterPage;

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  headerContainer: {
    // backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: "center",
  },
  filterTitle: {
    fontWeight: "600",
    fontSize: 21,
    color: colors.headingText,
  },
  headerButton: {
    // borderWidth: 2,
    borderColor: colors.background,
    // padding: 5,
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
    marginBottom: 20,
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
  TagContainer: {
    backgroundColor: colors.background,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },

  selectedTagContainer: {
    backgroundColor: colors.primaryTint,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  TagLabel: {
    color: colors.bodyText,
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.medium,
  },
  selectedTagLabel: {
    color: colors.primaryDark,
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.medium,
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
  footerContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    borderTopWidth: 2,
    borderColor: colors.cardBorder,
    paddingTop: 15,
    gap: 20,
  },
  footerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 99,
  },
  footerButtonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: "600",
  },
  clearAll: {},
  clearAllText: {
    color: colors.primaryDark,
    fontWeight: "500",
  },
});
