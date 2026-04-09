import { getCategoryFromOccupation } from "@/constants/categories";
import { colors } from "@/constants/colors";
import CategoryIcon from "@/utils/CategoryIcon";
import { Text, View } from "react-native";

const getIcon = (occupation: string) => {
  const category = getCategoryFromOccupation(occupation);
  if (category)
    return <CategoryIcon category={category} size={16} color={colors.coralDark} />;
};

export const OccupationTag = ({ occupation }: { occupation: string }) => {
  return (
    <View
      style={{
        backgroundColor: colors.coralTint,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 99,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        // borderWidth: 1,
        borderColor: colors.coral
      }}
    >
      {getIcon(occupation)}
      <Text style={{ color: colors.coralDark, fontWeight: "400" }}>{occupation}</Text>
    </View>
  );
};
