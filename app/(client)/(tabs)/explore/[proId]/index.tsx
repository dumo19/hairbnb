import CredentialCard from "@/components/CredentialCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import SpecializationTag from "@/components/SpecializationTag";
import { colors } from "@/constants/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  BadgeCheck,
  Bookmark,
  ChevronLeft,
  MessageCircle,
  Star,
} from "lucide-react-native";

import { supabase } from "@/lib/supabase";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
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
  const { proId } = useLocalSearchParams();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  async function fetchProfessionalData() {
    const { data, error } = await supabase
      .from("profiles")
      .select("first_name, last_name, categories, services, specializations")
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setCategories(data.categories);
      setSpecializations(data.specializations);
    }
  }

  return (
    <SafeAreaView edges={[]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Image */}
        <ImageBackground
          source={require("@/assets/images/haircut1.jpg")}
          style={styles.headerImage}
        />

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
                <SpecializationTag title="Barber" border />
                <SpecializationTag title="Stylist" border />
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

        {/* Profile Card */}
        {/* <View style={styles.profileSection}>
          <View style={styles.headerCard}>
            <View style={styles.profileRow}>
              <View style={styles.wrapper}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("@/assets/images/profile-pic.webp")}
                    style={styles.image}
                  />
                </View>
              </View>
              <View style={styles.profileDetails}>
                <View style={styles.nameRow}>
                  <Text style={styles.profileName}>{`${firstName} ${lastName}`}</Text>
                  <BadgeCheck size={16} color={colors.primaryDark} />
                </View>
                <Text style={styles.profileLocation}>Saint Paul, MN • 0.8 mi</Text>
                <View style={styles.tagRow}>
                  <SpecializationTag title="Barber" />
                  <SpecializationTag title="Stylist" />
                </View>
              </View>
            </View>

            <View style={styles.headerBoxStatContainer}>
              <View style={[styles.headerBox, styles.headerBoxBorder]}>
                <Star fill={colors.headingText} size={11} />
                <Text style={styles.headerBoxMaintext}>4.9</Text>
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
        </View> */}

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
            <Text style={styles.messageButtonText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5
              name="facebook-f"
              size={18}
              color={colors.headingText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5
              name="instagram"
              size={18}
              color={colors.headingText}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name="tiktok" size={18} color={colors.headingText} />
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
            <View style={styles.imageWrapper} key={i}>
              <View style={styles.imageInner}>
                <Image
                  source={require("@/assets/images/haircut1.jpg")}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* About Section */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>{`About ${firstName}`}</Text>
        </View>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        {/* Specializations */}
        <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Specializations</Text>
        </View>
        <View style={styles.specializationsContainer}>
          {specializations.map((spec) => (
            <SpecializationTag title={spec} border={false} key={spec} />
          ))}
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
        {[...Array(3)].map((_, i) => (
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

        {/* Info & Contact */}
        {/* <View style={styles.sectionHeaderContainer}>
          <Text style={styles.sectionHeader}>Information & Contact</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.topInfoContainer}>
            <Text style={styles.infoTextHeader}>Studio</Text>
            <Text
              style={styles.infoTextBody}
            >{`1234 Main St. \nSaint Paul, MN 55116`}</Text>
          </View>
          <View style={styles.topInfoContainer}>
            <Text style={styles.infoTextHeader}>Payment</Text>
            <Text style={styles.infoTextBody}>Card • Cash • Venmo</Text>
          </View>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.infoTextHeader}>Contact</Text>
          <Text style={styles.infoTextBody}>charles.carmichael@harry.com</Text>
          <Text style={styles.infoTextBody}>{"(651)-345-8970"}</Text>
        </View> */}
      </ScrollView>

      <TouchableOpacity
        style={[styles.floatingButton, styles.floatingButtonLeft]}
        onPress={() => router.back()}
      >
        <ChevronLeft size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSaved(!saved)}
        style={[styles.floatingButton, styles.floatingButtonRight]}
      >
        <Bookmark fill={saved ? colors.headingText : "transparent"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ======================
  // Layout
  // ======================
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: 250,
  },

  // ======================
  // Profile Card
  // ======================
  infoContainer: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: "#1A1A1A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    marginBottom: 20,
    marginTop: -40,
  },
  profileRow: {
    flexDirection: "row",
    gap: 10,
  },
  profileDetails: {
    gap: 0,
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
  },
  profileName: {
    fontWeight: "600",
    fontSize: 18,
    color: colors.headingText,
  },
  profileLocation: {
    fontSize: 12,
    color: colors.bodyText,
  },

  // Profile Image
  wrapper: {
    aspectRatio: 1,
    position: "relative",
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  // Footer (price + rating)
  footer: {
    borderTopWidth: 1,
    borderColor: colors.cardBorder,
    marginTop: 20,
    paddingTop: 10,
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
    fontSize: 14,
    fontWeight: "400",
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

  // ======================
  // Stats Row
  // ======================
  headerBoxStatContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: colors.cardBorder,
  },
  headerBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 8,
  },
  headerBoxBorder: {
    borderRightWidth: 1,
    borderColor: colors.cardBorder,
  },
  headerBoxMaintext: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.headingText,
  },
  headerBoxSecondText: {
    fontSize: 12,
    color: colors.mutedText,
  },

  // ======================
  // Action Buttons
  // ======================
  bookNowButton: {
    backgroundColor: colors.primary,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bookNowButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  actionRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 15,
    gap: 10,
  },
  messageButton: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    padding: 10,
    // marginRight: 10,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: colors.cardBorder,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  messageButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.headingText,
  },
  socialButton: {
    width: 45,
    height: 45,
    // marginRight: 10,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: colors.cardBorder,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  // ======================
  // Sections
  // ======================
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.headingText,
  },
  viewAllText: {
    color: colors.bodyText,
  },
  aboutText: {
    paddingHorizontal: 20,
    color: colors.bodyText,
  },
  specializationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 5,
  },

  // ======================
  // Work Images
  // ======================
  imageRow: {
    paddingHorizontal: 20,
    gap: 20,
  },
  // imageShadow: {},
  // imageWrapper: {
  //   height: 300,
  //   aspectRatio: 1,
  //   borderRadius: 15,
  //   overflow: "hidden",
  //   backgroundColor: "white",
  //   shadowColor: "#1A1A1A",
  //   shadowOffset: { width: 0, height: 4 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 16,
  // },

  imageWrapper: {
    height: 300,
    aspectRatio: 1,
    borderRadius: 15,

    backgroundColor: "white",

    // SHADOW lives here
    // shadowColor: "#1A1A1A",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.1,
    // shadowRadius: 16,

    // // Android
    // elevation: 5,

    // marginRight: 20
  },

  imageInner: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden", // move it here
  },
  // imageBox: {
  //   height: 300,
  //   aspectRatio: 1,
  //   borderRadius: 20,
  //   backgroundColor: "grey",
  // },

  // ======================
  // Contact
  // ======================
  contactContainer: {
    borderWidth: 2,
    borderColor: colors.cardBorder,
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
  },

  // ======================
  // Floating Buttons
  // ======================
  floatingButton: {
    position: "absolute",
    top: 60,
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.75,
  },
  floatingButtonLeft: {
    left: 15,
  },
  floatingButtonRight: {
    right: 15,
  },

  // ======================
  // Misc
  // ======================
  badge: {
    position: "absolute",
    bottom: -8,
    right: -8,
    backgroundColor: colors.primary,
    padding: 4,
    borderRadius: 6,
  },
});
