import { colors } from "@/constants/colors";
import { fontSize, fontWeight } from "@/constants/fonts";
import { Banknote, Clock, Coins, HandCoins, Scissors } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function ServiceCard({
  title,
  time,
  price,
  description,
  bottom = false,
  top = false,
}: {
  title: string;
  time: string;
  price: number;
  description?: string;
  bottom: boolean;
  top: boolean;
}) {
  const paddingVertical = 15;
  return (
    <View
      style={[
        styles.container,
        {
          borderTopWidth: top ? 0 : 1,
          paddingTop: top ? 0 : paddingVertical,
          paddingBottom: bottom ? 0 : paddingVertical,
        },
      ]}
    >
      <View style={styles.row}>
        {/* <View style={styles.iconContainer}>
          <Scissors color={colors.coral} size={20} />
        </View> */}
        <View style={styles.textContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.infoRow}>
              <Clock size={fontSize.secondary} color={colors.ashMid} />
              <Text style={styles.orgText}>{time}</Text>
            </View>
            <View style={styles.infoRow}>
              <Banknote size={fontSize.secondary} color={colors.ashMid} />
              <Text style={styles.priceText}>
                <Text style={styles.startingFromText}>Starting at</Text> ${price}
              </Text>
            </View>
          </View>

          {/* <Text style={styles.yearBadge}>
            <Text style={styles.startingAt}>from </Text>${price}
          </Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.cardBorder,
    // marginBottom: 10,
    // marginHorizontal: 20,
    // borderTopWidth: 1,
    // paddingVertical: 10,
    // padding: 15,
    // borderRadius: 10,
    // backgroundColor: colors.linen,
  },
  row: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    height: 36,
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.cardBorder,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginLeft: 10,
  },
  textColumn: {
    flex: 1,
    flexDirection: "column",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body,
    color: colors.ink,
  },
  yearBadge: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.semibold,
    color: colors.ink,
    // backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 6,
    // borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.coral,
    alignSelf: "flex-start",
    textAlign: "right",
  },
  orgText: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.medium,
    flexShrink: 1,
    color: colors.ashMid,
  },
  priceText: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.medium,
    flexShrink: 1,
    color: colors.ashMid,
  },
  startingFromText: {
    fontWeight: fontWeight.regular,
  },
  leftColumn: {
    flex: 1,
    flexShrink: 1,
    marginRight: 10,
  },

  startingAt: {
    color: colors.ashMid,
    fontSize: fontSize.caption,
    fontWeight: fontWeight.regular,
  },
  infoRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
