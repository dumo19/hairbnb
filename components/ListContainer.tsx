import { colors } from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

const ListContainer = ({
  title,
  items,
}: {
  title?: string;
  items: React.JSX.Element[];
}) => {
  return (
    
    <View
      style={{
        backgroundColor: colors.cardBackground,
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 20,
        borderRadius: 15,
        borderColor: colors.cardBorder,
        borderWidth: 1,
      }}
    >
      {items}
    </View>
  );
};

export default ListContainer;

const styles = StyleSheet.create({});
