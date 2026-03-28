import { colors } from "@/constants/theme";
import { supabase } from "@/lib/supabase";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { BadgeCheck, Star } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SpecializationTag from "./SpecializationTag";

const ExploreCard = ({ proId }: { proId: string }) => {
  const [picWidth, setPicWidth] = useState(0);
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  async function fetchProfessionalData() {
    const { data, error } = await supabase
      .from("profiles")
      .select("username, first_name, last_name")
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      setUsername(data.username);
      setFirstName(data.first_name);
      setLastName(data.last_name);
    }
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => router.push(`/explore/${proId}`)}
    >
      <View style={styles.profileRow}>
        <View
          style={styles.wrapper}
          onLayout={(e) => setPicWidth(e.nativeEvent.layout.width)}
        >
          {/* Image container (clipped) */}
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/profile-pic.webp")}
              style={styles.image}
            />
          </View>

          {/* Badge (NOT clipped) */}
          <View style={styles.badge}>
            <BadgeCheck size={12} color={colors.background} />
          </View>
        </View>
        <View style={{ gap: 3 }}>
          <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
          <Text>Barber • Stylist</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            {/* <MapPin size={14} color={colors.bodyText} /> */}
            <Text style={styles.profileLocation}>Saint Paul, MN • 0.8 mi</Text>
          </View>
          {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Star size={14} color={colors.bodyText} fill={colors.bodyText}/>
            <Text style={styles.profileLocation}>4.7</Text>
          </View> */}
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: 8, alignItems: "center" }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            // backgroundColor: "orange",
            width: picWidth,
            marginRight: 20,
            justifyContent: "center",
          }}
        >
          <Star size={16} color={colors.bodyText} fill={colors.bodyText} />
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: colors.bodyText }}
          >
            4.7
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: 5,
            flexWrap: "wrap",
            flex: 1,
          }}
        >
          <SpecializationTag title={"Curly Hair"} />
          <SpecializationTag title={"Haircut"} />
          <SpecializationTag title={"Haircut"} />
          <SpecializationTag title={"Haircut"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  wrapper: {
    // width: 80,
    aspectRatio: 1,
    position: "relative",
  },

  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary,
    padding: 2,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
  },

  badge: {
    position: "absolute",
    bottom: -5,
    right: -5,
    backgroundColor: colors.primary,
    padding: 3,
    borderRadius: 6,
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: colors.cardBorder,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
  },
  profileRow: { flexDirection: "row", gap: 20 },
  profilePicWrapper: {
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  profilePicInner: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },
  profileName: { fontWeight: "600", fontSize: 18, color: colors.headingText },
  profileSalon: { color: colors.bodyText, fontSize: 14, fontWeight: "500" },
  profileLocation: { color: colors.bodyText, fontSize: 12 },
});
