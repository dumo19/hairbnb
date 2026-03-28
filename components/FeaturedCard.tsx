import { colors } from "@/constants/theme";
import { Image } from "expo-image";
import { Star } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FeaturedCard = () => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require("@/assets/images/haircut1.jpg")}
          style={{ width: "100%", height: "100%" }}
          contentFit="cover"

        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.captionContainer}>
        <View>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>
            Charles Charmichael
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 8 }}>Barber • Stylist</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <Star size={14} color={colors.bodyText} fill={colors.bodyText} />
          <Text
            style={{ fontSize: 14, color: colors.bodyText, fontWeight: "700",  }}
          >
            4.7
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FeaturedCard;

const styles = StyleSheet.create({
  cardContainer: {
    // borderWidth: 2,
    // overflow: "hidden",
    // borderRadius: 15,
    // borderColor: colors.cardBorder
  },
  container: {
    backgroundColor: "lightgrey",
    height: 200,
    aspectRatio: 1,
    borderRadius: 15,
    overflow: "hidden",
    // borderWidth: 2,
    borderColor: colors.cardBorder,
  },
  captionContainer: {
    // backgroundColor: colors.background,
    // height: 100,
    // width: 240,
    // position: "absolute",
    // bottom: 0,
    // padding: 15,
    // justifyContent: "space-between",
    // padding: 15
    marginTop: 10,
  },
});
