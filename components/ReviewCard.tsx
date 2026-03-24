import { colors } from "@/constants/theme";
import { Star } from "lucide-react-native";
import { Text, View } from "react-native";

export default function ReviewCard({
  user,
  date,
  rating,
  message,
}: {
  user: string;
  date: string;
  rating: number;
  message: string;
}) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: colors.cardBorder,
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: colors.background,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.08,
        // shadowRadius: 12,
        // elevation: 4,
      }}
    >
      
      <Text style={{ fontWeight: "700", fontSize: 16, color: colors.headingText }}>{user}</Text>
      <Text style={{color: colors.bodyText}}>{date}</Text>
      <View style={{ flexDirection: "row", gap: 2 }}>
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={i}
            size={16}
            color={colors.bodyText}
            fill={colors.bodyText}
            style={{ marginVertical: 8 }}
          />
        ))}
      </View>
      <Text style={{color: colors.bodyText}}>{message}</Text>
    </View>
  );
}
