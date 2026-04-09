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
import { fontSize, fontWeight } from "@/constants/fonts";
import { supabase } from "@/lib/supabase";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
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

type ProfileProData = {
  first_name: string;
  last_name: string;
  occupations: string[];
  specializations: string[];
  credentials: Credential[];
  services: Service[];
  contacts: Contacts;
  avatar_url: string;
  feature_photo_url: string;
  bio: string;
  portfolio_photo_urls: string[];
  location: Locaton;
};

type Locaton = {
  shop_name: string | null;
  street_address: string | null;
  city: string | null;
  postal_code: string | null;
  is_mobile: boolean;
};

type Credential = {
  title: string;
  organization: string;
  year: string;
  category: string;
};

type Service = {
  title: string;
  time: string;
  price: number;
  category: string;
};

type Contacts = {
  phone_number: string | null;
  email_address: string | null;
  website: string | null;
  store_address: string | null;
  facebook_handle: string | null;
  instagram_handle: string | null;
  tiktok_handle: string | null;
};

export type Contact = {
  type: string;
  info: string;
};

// const contactInfo: Contact[] = [
//   { type: "phone_number", info: "+1 (651)-467-0872" },
//   { type: "email_address", info: "harry@harryssalon.com" },
//   { type: "website", info: "harryssalon.com" },
//   { type: "store_address", info: "1234 Main Street\nMinneapolis, MN 55414" },
//   { type: "facebook_handle", info: "@harryssalon" },
//   { type: "instagram_handle", info: "@harryssalon" },
//   { type: "tiktok_handle", info: "@harryssalon" },
// ];

const SectionHeader = React.memo(
  ({
    title,
    path,
    onNavigate,
  }: {
    title: string;
    path?: string;
    onNavigate?: () => void;
  }) => {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>{title}</Text>
        {path && (
          <TouchableOpacity onPress={onNavigate}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const SaveButton = React.memo(
  ({ saved, onToggle }: { saved: boolean; onToggle: () => void }) => {
    return (
      <TouchableOpacity onPress={onToggle}>
        <Bookmark size={22} fill={saved ? colors.headingText : "transparent"} />
      </TouchableOpacity>
    );
  },
);

const FloatingButtons = React.memo(
  ({
    saved,
    onToggleSave,
    onBack,
  }: {
    saved: boolean;
    onToggleSave: () => void;
    onBack: () => void;
  }) => {
    return (
      <>
        <TouchableOpacity
          style={[styles.floatingButton, styles.floatingButtonLeft]}
          onPress={onBack}
          // activeOpacity={0.8}
        >
          {/* <BlurView intensity={60} tint="light" style={styles.blur}> */}
          <ChevronLeft size={22} />
          {/* </BlurView> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.floatingButton, styles.floatingButtonRight]}
          // activeOpacity={0.8}
        >
          {/* <BlurView intensity={60} tint="light" style={styles.blurRow}> */}
          <SaveButton saved={saved} onToggle={onToggleSave} />

          <TouchableOpacity>
            <Ellipsis size={22} />
          </TouchableOpacity>
          {/* </BlurView> */}
        </TouchableOpacity>
      </>
    );
  },
);

const PageHeader = React.memo(({ proData }: { proData: ProfileProData }) => {
  return (
    <>
      <ImageBackground
        source={{ uri: proData.feature_photo_url }}
        style={styles.headerImage}
      />

      <View style={styles.cardDetailsContainer}>
        <View style={styles.bubbleContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: proData.avatar_url }} style={styles.avatar} />
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
});

const BioText = React.memo(({ bio }: { bio: string }) => {
  return <Text style={styles.aboutText}>{bio}</Text>;
});

const Portfolio = React.memo(({ urls }: { urls: string[] }) => {
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
              source={{ uri: urls[i] }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
});

const Specializations = React.memo(({ specs }: { specs: string[] }) => {
  return (
    <View style={styles.specializationsContainer}>
      {specs.map((spec) => (
        <SpecializationTag title={spec} key={spec} />
      ))}
    </View>
  );
});

const Credentials = React.memo(
  ({ credentials }: { credentials: Credential[] }) => {
    // const count = 3;
    // console.log("creds:", credentials.length)
    const credentialCards = credentials.map((cred, i) => (
      <CredentialCard
        key={i}
        title={cred.title}
        org={cred.organization}
        year={cred.year}
        top={i == 0}
        bottom={i == credentials.length - 1}
      />
    ));

    // console.log(credentialCards)

    return <ListContainer items={credentialCards} />;
  },
);

const Services = React.memo(({ services }: { services: Service[] }) => {
  const serviceCards = services.map((service, i) => (
    <ServiceCard
      key={i}
      title={service.title}
      time={service.time}
      price={service.price}
      top={i == 0}
      bottom={i == services.length - 1}
    />
  ));
  return <ListContainer items={serviceCards} />;
});

const Contact = React.memo(({ contacts }: { contacts: Contacts }) => {
  const entries = Object.entries(contacts).filter(
    (entry): entry is [string, string] => entry[1] !== null && entry[1] !== "",
  );

  console.log("contact component:", entries)

  const contactCards = entries.map(([key, value], i) => (
    <ContactCard
      // contact={contact}
      key={i}
      label={key}
      value={value}
      top={i == 0}
      bottom={i == entries.length - 1}
    />
  ));
  return <ListContainer items={contactCards} />;
});

export default function UserPage() {
  const router = useRouter();
  const { proId } = useLocalSearchParams();
  const [saved, setSaved] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("Services");
  const [proData, setProData] = useState<ProfileProData | undefined>(undefined);

  const handleToggleSave = useCallback(() => setSaved((prev) => !prev), []);
  const handleBack = useCallback(() => router.back(), [router]);
  const handleGalleryNavigation = useCallback(() => {
    if (!proData) return;
    router.push({
      pathname: `/explore/${proId}/portfolio-gallery` as any,
      params: {
        photos: JSON.stringify(proData.portfolio_photo_urls),
        firstName: proData.first_name,
      },
    });
  }, [router, proData, proId]);

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
        portfolio_photo_urls,
        locations (
          shop_name,
          street_address,
          city,
          postal_code,
          is_mobile
        ),
        credentials (
          title,
          organization,
          year,
          category
        ),
        services (
          title,
          time,
          price,
          category
        ),
        contacts (
          phone_number,
          email_address,
          website,
          facebook_handle,
          instagram_handle,
          tiktok_handle
        )
      `,
      )
      .eq("id", proId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      const { locations, credentials, services, contacts, ...rest } = data;

      const normalizedLocation = Array.isArray(locations)
        ? locations[0]
        : locations;

      // const location = data.locations[0];
      // console.log(normalizedLocation.street_address);

      setProData({
        ...rest,
        location: normalizedLocation ?? null,
        credentials: data.credentials,
        services: data.services,
        contacts: {
          phone_number: data.contacts[0].phone_number || null,
          email_address: data.contacts[0].email_address || null,
          website: data.contacts[0].website || null,
          store_address: normalizedLocation.street_address
            ? `${normalizedLocation.street_address}\n${normalizedLocation.city} ${normalizedLocation.postal_code}`
            : null,
          facebook_handle: data.contacts[0].facebook_handle || null,
          instagram_handle: data.contacts[0].instagram_handle || null,
          tiktok_handle: data.contacts[0].tiktok_handle || null,
        },
      });

      // console.log(data.contacts);
    }
  }

  if (!proData) return null;
  // console.log(proData.contacts)

  const TabBar = () => {
    return (
      <View style={styles.tabBar}>
        <Pressable
          onPress={() => setSelectedTab("Services")}
          style={[
            styles.tabBarButton,
            {
              backgroundColor:
                selectedTab === "Services" ? colors.primary : "transparent",
            },
          ]}
        >
          <Text
            style={[
              styles.tabBarText,
              {
                color: selectedTab === "Services" ? "white" : colors.bodyText,
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
              backgroundColor:
                selectedTab === "Contact" ? colors.primary : "transparent",
            },
          ]}
        >
          <Text
            style={[
              styles.tabBarText,
              {
                color: selectedTab === "Contact" ? "white" : colors.bodyText,
              },
            ]}
          >
            Contact
          </Text>
        </Pressable>
      </View>
    );
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

  return (
    <SafeAreaView edges={[]} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <PageHeader proData={proData} />
        <BioText bio={proData.bio} />

        <SectionHeader
          title={`${proData.first_name}'s portfolio`}
          path={`/explore/${proId}/portfolio-gallery`}
          onNavigate={handleGalleryNavigation}
        />
        <Portfolio urls={proData.portfolio_photo_urls} />

        <SectionHeader title={"Specializations"} />
        <Specializations specs={proData.specializations} />

        <SectionHeader title={"Certifications & Licenses"} />
        <Credentials credentials={proData.credentials} />

        <TabBar />
        {selectedTab === "Services" && <Services services={proData.services} />}
        {/* {selectedTab === "Reviews" && <Reviews />} */}
        {selectedTab === "Contact" && <Contact contacts={proData.contacts}/>}
      </ScrollView>

      <FloatingButtons
        saved={saved}
        onToggleSave={handleToggleSave}
        onBack={handleBack}
      />
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
    marginHorizontal: 20,
    paddingBottom: 20,
    // marginBottom: 10,
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
    marginTop: 20,
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
    fontWeight: fontWeight.regular,
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
    gap: 15,
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
    backgroundColor: colors.cardBackground,
    borderRadius: 999,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    margin: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    // borderBottomWidth: 3,
    // borderBottomColor: colors.cardBorder
  },
  tabBarText: {
    color: "white",
    fontWeight: fontWeight.semibold,
    fontSize: fontSize.body,
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
    backgroundColor: "white",
    padding: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    // opacity: 0.5
  },
  floatingButtonLeft: {
    left: 20,
  },
  floatingButtonRight: {
    right: 20,
    flexDirection: "row",
    gap: 10,
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
