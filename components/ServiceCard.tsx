import { colors } from "@/constants/theme";
import { scissorsHairComb } from "@lucide/lab";
import { Icon, Scissors } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ServiceCard({
  title,
  time,
  price,
  description,
}: {
  title: string;
  time: string;
  price: number;
  description?: string;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.iconContainer}>
          <Scissors color={colors.primary} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.leftTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.bodyText}>{time}</Text>
            <Text style={styles.bodyText}>{description}</Text>
          </View>
          <Text style={styles.priceText}>${price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: colors.cardBorder,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: colors.background,
  },
  iconContainer: {
    backgroundColor: "#FFE0DB",
    height: 48,
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  leftTextContainer: {
    flexDirection: "column",
    flex: 1,
    marginRight: 10,
    // backgroundColor: "lightblue",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    flex: 1,
    // backgroundColor: "orange",
  },
  bodyText: {
    fontSize: 12,
    flexShrink: 1,
    color: colors.bodyText,
  },
  titleText: {
    fontWeight: "700",
    fontSize: 16,
    color: colors.headingText,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.bodyText,
  },
});
