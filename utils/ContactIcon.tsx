import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Globe, Mail, Phone, Store } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const ContactIcon = ({
  icon,
  color,
  size,
}: {
  icon: string;
  color: string;
  size: number;
}) => {
  switch (icon) {
    case "phone_number":
      return <Phone color={color} size={size} />;
    case "email_address":
      return <Mail color={color} size={size} />;
    case "website":
      return <Globe color={color} size={size} />;
    case "store_address":
      return <Store color={color} size={size} />;
    case "facebook_handle":
      return <FontAwesome5 name="facebook-f" size={size} color={color} />;
    case "instagram_handle":
      return <FontAwesome5 name="instagram" size={size} color={color} />;
    case "tiktok_handle":
      return <FontAwesome5 name="tiktok" size={size} color={color} />;
    default:
      return null;
  }
};

export default ContactIcon;

const styles = StyleSheet.create({});
