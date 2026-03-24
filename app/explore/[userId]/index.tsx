import CredentialCard from "@/components/CredentialCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import { colors } from "@/constants/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { hairdryer,scissorsHairComb } from "@lucide/lab";
import { useRouter } from "expo-router";
import {
  Bookmark,
  ChevronLeft,
  Icon,
  MapPin,
  MessageCircle,
  Star,
  Store,
} from "lucide-react-native";

import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserPage() {
  const router = useRouter();
  const firstName = "Charles";
  const lastName = "Carmichael";

  const [saved, setSaved] = useState(false);

  return (
    <SafeAreaView edges={[]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Image */}
        <ImageBackground
          source={require("@/assets/images/haircut1.jpg")}
          style={styles.headerImage}
        />

        {/* Tags and Profile Card */}
        <View style={styles.profileSection}>
          <View style={styles.tagsContainer}>
            <View style={styles.tag}>
              <Icon iconNode={scissorsHairComb} size={14} color={colors.background} />
              <Text style={styles.tagText}>Barber</Text>
            </View>
            <View style={styles.tag}>
              <Icon iconNode={hairdryer} size={14} color={colors.background} />
              <Text style={styles.tagText}>Stylist</Text>
            </View>
          </View>

          <View style={styles.headerCard}>
            <View style={styles.profileRow}>
              <View style={styles.profilePicWrapper}>
                <View style={styles.profilePicInner} />
              </View>
              <View>
                <Text style={styles.profileName}>
                  {firstName}
                  {"\n"}
                  {lastName}
                </Text>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Store size={14} color={colors.bodyText} />
                  <Text style={styles.profileSalon}>Harry's Salon</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <MapPin size={14} color={colors.bodyText} />
                  <Text style={styles.profileLocation}>
                    Saint Paul, MN • 0.8 mi
                  </Text>
                </View>
              </View>
            </View>

            {/* Stats */}
            <View style={styles.headerBoxStatContainer}>
              <View style={[styles.headerBox, styles.headerBoxBorder]}>
                <View style={styles.statRow}>
                  <Star fill={colors.headingText} size={14} />
                  <Text style={styles.headerBoxMaintext}>4.9</Text>
                </View>
                <Text style={styles.headerBoxSecondText}>Rating</Text>
              </View>
              <View style={[styles.headerBox, styles.headerBoxBorder]}>
                <Text style={styles.headerBoxMaintext}>8 yr</Text>
                <Text style={styles.headerBoxSecondText}>Experience</Text>
              </View>
              <View style={styles.headerBox}>
                <Text style={styles.headerBoxMaintext}>$$</Text>
                <Text style={styles.headerBoxSecondText}>Price</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity
            onPress={() => router.push("./message-modal")}
            style={styles.messageButton}
          >
            <MessageCircle size={21} color={colors.headingText} />
            <Text style={styles.messageButtonText}>{`Message`}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5
              name="facebook-f"
              size={21}
              color={colors.headingText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5
              name="instagram"
              size={21}
              color={colors.headingText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="tiktok" size={21} color={colors.headingText} />
          </TouchableOpacity>
        </View>

        {/* Work Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{`${firstName}'s work`}</Text>
          <TouchableOpacity onPress={() => router.push("./images-modal")}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.imageRow}
        >
          {[...Array(5)].map((_, i) => (
            <View key={i} style={styles.imageWrapper}>
              <View style={styles.imageBox} />
            </View>
          ))}
        </ScrollView>

        {/* About Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{`About ${firstName}`}</Text>
        </View>
        <View style={styles.aboutBox}>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>

        {/* Credentials */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Credentials</Text>
        </View>
        {[...Array(3)].map((_, i) => (
          <CredentialCard
            key={i}
            title="Licensed Stylist"
            org="Minnesota Board of Cosmotology"
            year="2023"
          />
        ))}

        {/* Services */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Services & Pricing</Text>
          <TouchableOpacity onPress={() => router.push("./services-modal")}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        {[...Array(5)].map((_, i) => (
          <ServiceCard key={i} title="Haircut" time="30 min" price={50} />
        ))}

        {/* Reviews */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Reviews</Text>
          <TouchableOpacity onPress={() => router.push("./reviews-modal")}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        {[5, 2, 4].map((rating, i) => (
          <ReviewCard
            key={i}
            user="Alexander S."
            date="January 2026"
            rating={rating}
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        ))}

        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Information</Text>
        </View>

        <View>
          <View>
            <Text>Studio</Text>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.floatingButton, { left: 15 }]}
        onPress={() => router.back()}
      >
        <ChevronLeft size={30}/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.floatingButton, { right: 15 }]}>
        <Bookmark fill={saved ? colors.headingText : "transparent"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollView: { flex: 1 },
  headerImage: { width: "100%", height: 250 },

  profileSection: { marginTop: -75 },

  tagsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    // marginBottom: 10,
  },
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: colors.primary,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  tagText: { color: colors.background, fontWeight: "700", fontSize: 14 },

  headerCard: {
    borderWidth: 2,
    borderColor: colors.cardBorder,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: colors.background,
  },
  profileRow: { flexDirection: "row", gap: 20 },
  profilePicWrapper: {
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicInner: {
    backgroundColor: "lightgrey",
    width: "94%",
    height: "94%",
    borderRadius: 5,
  },
  profileName: { fontWeight: "700", fontSize: 21, color: colors.headingText },
  profileSalon: { color: colors.bodyText, fontSize: 14, fontWeight: "500" },
  profileLocation: { color: colors.bodyText, fontSize: 12 },

  headerBoxStatContainer: {
    flexDirection: "row",
    marginTop: 30,
    borderRadius: 10,
    overflow: "hidden",
  },
  headerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headerBoxBorder: { borderRightWidth: 1, borderColor: colors.cardBorder },
  statRow: { flexDirection: "row", alignItems: "center", gap: 3 },
  headerBoxMaintext: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.headingText,
  },
  headerBoxSecondText: { fontSize: 14, color: colors.bodyText },

  actionRow: { flexDirection: "row", paddingHorizontal: 20, marginBottom: 15 },
  bookNowButton: {
    backgroundColor: colors.primary,
    padding: 10,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messageButton: {
    backgroundColor: colors.background,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderWidth: 2,
    borderColor: colors.cardBorder,
    flexDirection: "row",
    gap: 5,
  },
  bookNowButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.background,
  },
  messageButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.headingText,
  },
  socialButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.cardBorder,
    backgroundColor: colors.background,
    marginRight: 10,
  },

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

  imageRow: { paddingHorizontal: 20 },
  imageWrapper: { marginRight: 10 },
  imageBox: {
    backgroundColor: "grey",
    height: 200,
    aspectRatio: 3 / 4,
    borderRadius: 20,
  },

  aboutBox: {
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: colors.cardBorder,
    borderRadius: 15,
    marginBottom: 10,
  },
  aboutText: { color: colors.bodyText, padding: 15 },
  floatingButton: {
    position: "absolute",
    top: 60,
    backgroundColor: colors.background,
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.75,
  },
});
