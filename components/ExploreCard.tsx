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
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [occupations, setOccupations] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  async function fetchProfessionalData() {
    const { data, error } = await supabase
      .from("profiles")
      .select("username, first_name, last_name, specializations, occupations")
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      setUsername(data.username);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setSpecializations(data.specializations);
      setOccupations(data.occupations);
    }
  }

  return (
    <TouchableOpacity
      onPress={() => router.push(`/(client)/(tabs)/explore/${proId}`)}
      style={styles.cardTouchable}
    >
      <View style={styles.cardInner}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/assets/images/haircut1.jpg")}
            style={styles.coverImage}
          />
          <View style={styles.clientWorkBadge}>
            <Text style={styles.clientWorkText}>Client Work</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.profileRow}>
            <View
              style={styles.wrapper}
              // onLayout={(e) => setPicWidth(e.nativeEvent.layout.width)}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={require("@/assets/images/profile-pic.webp")}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.profileDetails}>
              <View style={styles.nameRow}>
                <Text
                  style={styles.profileName}
                >{`${firstName} ${lastName}`}</Text>
                <BadgeCheck size={18} color={colors.primaryDark} />
              </View>
              <View style={styles.locationRow}>
                <Text style={styles.profileLocation}>
                  Saint Paul, MN • 0.8 mi
                </Text>
              </View>
              <View style={styles.tagRow}>
                {occupations.map((occ) => (
                  <SpecializationTag title={occ} border key={occ} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View>
              <Text style={styles.startingAtLabel}>STARTING AT</Text>
              <Text style={styles.price}>
                $50
                <Text style={styles.perSession}> / session</Text>
              </Text>
            </View>
            <View style={styles.ratingRow}>
              <Star size={12} color={colors.primary} fill={colors.primary} />
              <Text style={styles.ratingText}>4.7</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  cardTouchable: {
    paddingHorizontal: 20,
    shadowColor: "#1A1A1A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    marginBottom: 20,
  },
  cardInner: {
    borderRadius: 15,
    overflow: "hidden",
  },
  imageWrapper: {
    backgroundColor: "grey",
    width: "100%",
    aspectRatio: 3 / 2,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  clientWorkBadge: {
    position: "absolute",
    left: 15,
    bottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  clientWorkText: {
    fontSize: 12,
    color: colors.background,
    fontWeight: "600",
  },
  infoContainer: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
  },
  profileRow: {
    flexDirection: "row",
    gap: 10,
  },
  profileDetails: {
    gap: 1,
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  tagRow: {
    flexDirection: "row",
    gap: 5,
    marginTop: 3,
    flexWrap: "wrap",
  },
  footer: {
    borderTopWidth: 1,
    marginTop: 15,
    paddingTop: 10,
    borderColor: colors.cardBorder,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startingAtLabel: {
    fontSize: 12,
    color: colors.mutedText,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
  perSession: {
    fontWeight: "400",
    fontSize: 14,
    color: colors.mutedText,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "600",
  },
  wrapper: {
    aspectRatio: 1,
    position: "relative",
  },
  imageContainer: {
    // flex: 1,

    borderRadius: 10,
    overflow: "hidden",
    borderColor: colors.primary,
  },
  image: {
    width: "100%",
    height: "100%",
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
  profileName: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.headingText,
  },
  profileSalon: {
    color: colors.bodyText,
    fontSize: 14,
    fontWeight: "500",
  },
  profileLocation: {
    color: colors.bodyText,
    fontSize: 12,
  },
});
