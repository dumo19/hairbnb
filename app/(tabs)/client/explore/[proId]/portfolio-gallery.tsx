import { colors } from "@/constants/colors";
import { fontSize, fontWeight } from "@/constants/fonts";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Columns2, Square, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PortfolioGalleryPage = () => {
  const router = useRouter();
  const { photos, firstName } = useLocalSearchParams();
  const photoUrls: string[] = photos ? JSON.parse(photos as string) : [];
  // console.log(photoUrls)
  const [displayColumns, setDisplayColumns] = useState<number>(1);

  const handleColumnToggle = () => {
    setDisplayColumns((displayColumns % 2) + 1);
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          padding: 20,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: colors.cardBorder,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity
            style={styles.columnButton}
            onPress={handleColumnToggle}
          >
            {displayColumns === 2 ? (
              <Square color={colors.ink} size={22} />
            ) : (
              <Columns2 color={colors.ink} size={22} />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSize.title,
              fontWeight: fontWeight.semibold,
            }}
          >
            {firstName}'s portfolio
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <X color={colors.ink} size={22} />
        </TouchableOpacity>
      </View>
      <FlatList
        key={displayColumns}
        data={photoUrls}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{
          paddingTop: 20,
          gap: 10,
          paddingHorizontal: 20,
          paddingBottom: 150,
        }}
        columnWrapperStyle={displayColumns > 1 ? { gap: 10 } : undefined}
        numColumns={displayColumns}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default PortfolioGalleryPage;

const styles = StyleSheet.create({
  columnButton: {
    height: 40,
    aspectRatio: 1,
    backgroundColor: colors.linen,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.cardBorder,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 15,
  },
});
