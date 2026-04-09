import { colors } from "@/constants/colors";
import { fontSize, fontWeight } from "@/constants/fonts";
import { supabase } from "@/lib/supabase";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Award, Bookmark, MapPin } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { OccupationTag } from "./OccupationTag";

type ExploreProData = {
  firstName: string;
  lastName: string;
  occupations: string[];
  avatar: string;
  featurePhoto: string;
};

const ExploreCard = ({ proId }: { proId: string }) => {
  const [proData, setProData] = useState<ExploreProData | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  async function fetchProfessionalData() {
    const { data, error } = await supabase
      .from("profiles")
      .select(
        `username, 
        first_name, 
        last_name, 
        specializations, 
        occupations, 
        avatar_url, 
        feature_photo_url`,
      )
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      setProData({
        firstName: data.first_name,
        lastName: data.last_name,
        occupations: data.occupations,
        avatar: data.avatar_url,
        featurePhoto: data.feature_photo_url,
      });
    }
  }

  if (!proData) return;

  return (
    <TouchableOpacity
      onPress={() => router.push(`/(client)/(tabs)/explore/${proId}`)}
      style={styles.cardTouchable}
    >
      <View style={styles.cardInner}>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: proData.featurePhoto }}
            style={styles.coverImage}
          />
          <TouchableOpacity style={styles.bookmarkButton}>
            {/* <BlurView intensity={60} tint="light" style={styles.blur}> */}
            <Bookmark />
            {/* </BlurView> */}
          </TouchableOpacity>
        </View>
        <View style={styles.cardDetailsContainer}>
          {/* profile picture */}
          <View style={styles.avatarContainer}>
            <Image source={{ uri: proData.avatar }} style={styles.avatar} />
          </View>

          {/* name */}
          <Text style={styles.nameLabel}>
            {proData.firstName} {proData.lastName}
          </Text>

          {/* experience */}
          <View style={[styles.experienceContainer, { marginBottom: 2 }]}>
            <Award size={fontSize.secondary + 2} color={colors.bodyText} />
            <Text
              style={{ color: colors.bodyText, fontSize: fontSize.secondary }}
            >
              8 yrs
            </Text>
          </View>

          {/* location */}
          <View style={styles.experienceContainer}>
            <MapPin size={fontSize.secondary + 2} color={colors.bodyText} />
            <Text
              style={{ color: colors.bodyText, fontSize: fontSize.secondary }}
            >
              Minneapolis, MN
            </Text>
          </View>

          {/* occupations */}
          <View style={styles.occupationTagContainer}>
            {proData.occupations.map((o, i) => (
              <OccupationTag occupation={o} key={i} />
            ))}
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
    // paddingBottom: 20,
    shadowColor: "#1A1A1A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    marginBottom: 20,

  },
  cardInner: {
    borderRadius: 15,
    overflow: "hidden",
    
  },
  imageWrapper: {
    backgroundColor: "lightgrey",
    width: "100%",
    aspectRatio: 3 / 2,
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  bookmarkButton: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 999,
  },
  avatarContainer: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "white",
    marginTop: -40,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  cardDetailsContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingBottom: 15,
    // borderWidth: 2,
    // borderTopWidth: 0,
    // borderColor: colors.cardBorder,
  },
  nameLabel: {
    fontSize: fontSize.heading,
    fontWeight: fontWeight.semibold,
    marginTop: 5,
    marginBottom: 5,
    color: colors.ink,
  },
  experienceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  occupationTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 15,
  },
});
