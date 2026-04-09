import { colors } from "@/constants/colors";
import ContactIcon from "@/utils/ContactIcon";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ContactCard = ({
  label,
  value,
  top,
  bottom,
}: {
  label: string;
  value: string;
  top: boolean;
  bottom: boolean;
}) => {
  const iconSize = 18;
  const iconColor = colors.coralDark;
  const paddingVertical = 15;

  if (
    label === "facebook_handle" ||
    label === "instagram_handle" ||
    label === "tiktok_handle"
  ) {
    value = "@" + value;
  }

  return (
    <View
      style={[
        styles.contactItem,
        {
          borderTopWidth: top ? 0 : 1,
          paddingTop: top ? 0 : paddingVertical,
          paddingBottom: bottom ? 0 : paddingVertical,
        },
      ]}
    >
      <View style={styles.contactIconContainer}>
        <ContactIcon icon={label} size={iconSize} color={iconColor} />
      </View>
      <Text style={styles.contactText}>{value}</Text>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.cardBorder,
  },
  contactIconContainer: {
    height: 36,
    // padding: 5,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  contactText: {},
});
