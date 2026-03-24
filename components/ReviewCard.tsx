import { colors } from "@/constants/theme";
import { Star } from "lucide-react-native";
import { Text, View, StyleSheet } from "react-native";

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
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.ratingContainer}>
          {Array.from({ length: rating }, (_, i) => (
            <Star
              key={i}
              size={16}
              color={colors.bodyText}
              fill={colors.bodyText}
              style={styles.star}
            />
          ))}
        </View>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: colors.cardBorder,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: colors.background
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userName: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.headingText,
  },
  date: {
    color: colors.bodyText,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 2,
  },
  star: {
    marginVertical: 8,
  },
  message: {
    color: colors.bodyText,
  },
});