import { getCategoryFromOccupation } from "@/constants/categories";
import { colors, fontSize, fontWeight } from "@/constants/theme";
import CategoryIcon from "@/utils/CategoryIcon";
import { Text, View } from "react-native";

const getIcon = (occupation: string) => {
  const category = getCategoryFromOccupation(occupation);
  if (category)
    return <CategoryIcon category={category} size={fontSize.secondary + 3} color={colors.primaryDark} />;
};

export const OccupationTag = ({ occupation }: { occupation: string }) => {
  return (
    <View
      style={{
        backgroundColor: colors.primaryTint,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 99,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        // borderWidth: 1,
        borderColor: colors.primaryDark
      }}
    >
      {getIcon(occupation)}
      <Text style={{ color: colors.primaryDark, fontWeight: fontWeight.medium, fontSize: fontSize.secondary }}>{occupation}</Text>
    </View>
  );
};
