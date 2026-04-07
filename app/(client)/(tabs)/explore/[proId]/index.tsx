import CredentialCard from "@/components/CredentialCard";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import SpecializationTag from "@/components/SpecializationTag";
import { colors } from "@/constants/theme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Award,
  Bookmark,
  ChevronLeft,
  Ellipsis,
  MapPin,
} from "lucide-react-native";

import ContactCard from "@/components/ContactCard";
import ListContainer from "@/components/ListContainer";
import { OccupationTag } from "@/components/OccupationTag";
import { supabase } from "@/lib/supabase";
import { BlurView } from "expo-blur";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fontSize, fontWeight } from "@/constants/fonts";

type ProfileProData = {
  first_name: string;
  last_name: string;
  occupations: string[];
  specializations: string[];
  avatar_url: string;
  feature_photo_url: string;
  bio: string;
  location: Locaton;
};

type Locaton = {
  shop_name: string | null;
  street_address: string | null;
  city: string | null;
  postal_code: string | null;
  is_mobile: boolean;
};

export type Contact = {
  type: string;
  info: string;
};

const contactInfo: Contact[] = [
  { type: "phone_number", info: "+1 (651)-467-0872" },
  { type: "email_address", info: "harry@harryssalon.com" },
  { type: "website", info: "harryssalon.com" },
  { type: "store_address", info: "1234 Main Street\nMinneapolis, MN 55414" },
  { type: "facebook_handle", info: "@harryssalon" },
  { type: "instagram_handle", info: "@harryssalon" },
  { type: "tiktok_handle", info: "@harryssalon" },
];

export default function UserPage() {
  const router = useRouter();
  const { proId } = useLocalSearchParams();
  const [saved, setSaved] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Services");
  const [proData, setProData] = useState<ProfileProData | undefined>(undefined);

  useEffect(() => {
    fetchProfessionalData();
  }, []);

  async function fetchProfessionalData() {
    const { data, error } = await supabase
      .from("profiles")
      .select(
        `
        first_name, 
        last_name, 
        categories, 
        services, 
        occupations, 
        specializations, 
        avatar_url, 
        feature_photo_url,
        bio,
        locations (
          shop_name,
          street_address,
          city,
          postal_code,
          is_mobile
        )
      `,
      )
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      const { locations, ...rest } = data;

      const normalizedLocation = Array.isArray(locations)
        ? locations[0]
        : locations;

      setProData({
        ...rest,
        location: normalizedLocation ?? null,
      });
    }
  }

  if (!proData) return null;

  const SectionHeader = ({ title, path }: { title: string; path?: string }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>{title}</Text>
        {path && (
          <TouchableOpacity onPress={() => router.push(path as any)}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const PageHeader = () => {
    return (
      <>
        <ImageBackground
          source={{ uri: proData.feature_photo_url }}
          style={styles.headerImage}
        />

        <View style={styles.cardDetailsContainer}>
          <View style={styles.bubbleContainer}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: proData.avatar_url }}
                style={styles.avatar}
              />
            </View>
            {/* <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome5
                  name="facebook-f"
                  size={22}
                  color={colors.primaryDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome5
                  name="instagram"
                  size={22}
                  color={colors.primaryDark}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome5
                  name="tiktok"
                  size={22}
                  color={colors.primaryDark}
                />
              </TouchableOpacity>
            </View> */}
          </View>
          <Text style={styles.nameLabel}>
            {proData.first_name} {proData.last_name}
          </Text>
          <View style={[styles.experienceContainer, { marginBottom: 2 }]}>
            <Award size={16} color={colors.bodyText} />
            <Text style={{ color: colors.bodyText }}>8 yrs experience</Text>
          </View>
          <View style={styles.experienceContainer}>
            <MapPin size={16} color={colors.bodyText} />
            <Text style={{ color: colors.bodyText }}>
              {proData.location?.shop_name} • {proData.location?.city}
            </Text>
          </View>
          <View style={styles.occupationTagContainer}>
            {proData.occupations.map((o, i) => (
              <OccupationTag occupation={o} key={i} />
            ))}
          </View>
        </View>
      </>
    );
  };

  const BioText = () => {
    return <Text style={styles.aboutText}>{proData.bio}</Text>;
  };

  const Portfolio = () => {
    return (
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
    );
  };

  const Specializations = () => {
    return (
      <View style={styles.specializationsContainer}>
        {proData.specializations.map((spec) => (
          <SpecializationTag title={spec} key={spec} />
        ))}
      </View>
    );
  };

  const Credentials = () => {
    const count = 3;
    const credentialCards = [...Array(count)].map((_, i) => (
      <CredentialCard
        key={i}
        title="Licensed Stylist"
        org="Minnesota Board of Cosmotology"
        year="2023"
        top={i == 0}
        bottom={i == count - 1}
      />
    ));

    return <ListContainer items={credentialCards} />;
  };

  const TabBar = () => {
    return (
      <View style={styles.tabBar}>
        <Pressable
          onPress={() => setSelectedTab("Services")}
          style={[
            styles.tabBarButton,
            {
              borderColor:
                selectedTab === "Services" ? colors.primary : colors.cardBorder,
            },
          ]}
        >
          <Text
            style={[
              styles.tabBarText,
              {
                color:
                  selectedTab === "Services" ? colors.primaryDark : "#A8938C",
              },
            ]}
          >
            Services
          </Text>
        </Pressable>
        {/* <Pressable
          onPress={() => setSelectedTab("Reviews")}
          style={[
            styles.tabBarButton,
            {
              borderColor:
                selectedTab === "Reviews" ? colors.primary : colors.cardBorder,
            },
          ]}
        >
          <Text
            style={[
              styles.tabBarText,
              {
                color:
                  selectedTab === "Reviews"
                    ? colors.primaryDark
                    : "#A8938C",
              },
            ]}
          >
            Reviews
          </Text>
        </Pressable> */}
        <Pressable
          onPress={() => setSelectedTab("Contact")}
          style={[
            styles.tabBarButton,
            {
              borderColor:
                selectedTab === "Contact" ? colors.primary : colors.cardBorder,
            },
          ]}
        >
          <Text
            style={[
              styles.tabBarText,
              {
                color:
                  selectedTab === "Contact" ? colors.primaryDark : "#A8938C",
              },
            ]}
          >
            Contact
          </Text>
        </Pressable>
      </View>
    );
  };

  const Services = () => {
    const count = 10;
    const serviceCards = [...Array(count)].map((_, i) => (
      <ServiceCard
        key={i}
        title="Haircut"
        time="30 min"
        price={50}
        top={i == 0}
        bottom={i == count - 1}
      />
    ));
    return <ListContainer items={serviceCards} />;
  };

  const Reviews = () => {
    return (
      <View style={{ paddingBottom: 20, marginHorizontal: 20 }}>
        {[5, 2, 4].map((rating, i) => (
          <ReviewCard
            key={i}
            user="Alexander S."
            date="January 2026"
            rating={rating}
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        ))}
      </View>
    );
  };

  const Contact = () => {
    const contactCards = contactInfo.map((contact, i) => (
      <ContactCard
        contact={contact}
        key={i}
        top={i == 0}
        bottom={i == contactInfo.length - 1}
      />
    ));
    return <ListContainer items={contactCards} />;
  };

  const FloatingButtons = () => {
    return (
      <>
        <TouchableOpacity
          style={[styles.floatingButton, styles.floatingButtonLeft]}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <BlurView intensity={60} tint="light" style={styles.blur}>
            <ChevronLeft size={22} />
          </BlurView>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.floatingButton, styles.floatingButtonRight]}
          activeOpacity={0.8}
        >
          <BlurView intensity={60} tint="light" style={styles.blurRow}>
            <TouchableOpacity onPress={() => setSaved(!saved)}>
              <Bookmark
                size={22}
                fill={saved ? colors.headingText : "transparent"}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Ellipsis size={22} />
            </TouchableOpacity>
          </BlurView>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView edges={[]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PageHeader />
        <BioText />

        <SectionHeader title={`${proData.first_name}'s portfolio`} path={`/explore/${proId}/portfolio-gallery`}/>
        <Portfolio />

        <SectionHeader title={"Specializations"} />
        <Specializations />

        <SectionHeader title={"Certifications & Licenses"} />
        <Credentials />

        <TabBar />
        {selectedTab === "Services" && <Services />}
        {/* {selectedTab === "Reviews" && <Reviews />} */}
        {selectedTab === "Contact" && <Contact />}
      </ScrollView>

      <FloatingButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ======================
  // Layout
  // ======================
  container: {
    flex: 1,
    backgroundColor: "white",
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
  cardDetailsContainer: {
    backgroundColor: "white",
    marginHorizontal: 15,
    paddingBottom: 15,
    marginBottom: 10,
  },
  bubbleContainer: {
    marginTop: -45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarContainer: {
    height: 90,
    aspectRatio: 1,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "white",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  nameLabel: {
    fontSize: fontSize.heading,
    fontWeight: fontWeight.semibold,
    marginTop: 5,
    marginBottom: 5,
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

  // ======================
  // Social Buttons
  // ======================
  socialContainer: {
    flexDirection: "row",
    gap: 8,
  },
  socialButton: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "white",
    backgroundColor: colors.primaryLight,
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
    marginTop: 40,
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: fontSize.title,
    fontWeight: fontWeight.semibold,
    color: colors.headingText,
  },
  viewAllText: {
    color: colors.bodyText,
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.regular
  },
  aboutText: {
    paddingHorizontal: 20,
    color: colors.bodyText,
  },
  specializationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 10,
  },

  // ======================
  // Portfolio Images
  // ======================
  imageRow: {
    paddingHorizontal: 20,
    gap: 20,
  },
  imageWrapper: {
    height: 300,
    aspectRatio: 1,
    borderRadius: 15,
    backgroundColor: "white",
  },
  imageInner: {
    flex: 1,
    borderRadius: 15,
    overflow: "hidden",
  },

  // ======================
  // Tab Bar
  // ======================
  tabBar: {
    flexDirection: "row",
    // marginHorizontal: 15,
    // backgroundColor: colors.cardBackground,
    // borderRadius: 999,
    marginTop: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 999,
    // margin: 5,
    backgroundColor: "white",
    paddingVertical: 15,
    borderBottomWidth: 3,
    // borderBottomColor: colors.cardBorder
  },
  tabBarText: {
    color: "white",
    fontWeight: "600",
  },

  // ======================
  // Contact Tab
  // ======================
  contactsContainer: {
    marginHorizontal: 20,
    flexDirection: "column",
    gap: 10,
    paddingBottom: 20,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactIconContainer: {
    height: 36,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  contactText: {},

  // ======================
  // Floating Buttons
  // ======================
  floatingButton: {
    position: "absolute",
    top: 60,
    zIndex: 10,
  },
  floatingButtonLeft: {
    left: 20,
  },
  floatingButtonRight: {
    right: 20,
  },
  blur: {
    padding: 10,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  blurRow: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
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
