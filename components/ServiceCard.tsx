import { colors } from "@/constants/colors";
import { fontSize, fontWeight } from "@/constants/fonts";
import { Scissors } from "lucide-react-native";
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
          <View style={styles.textColumn}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.yearBadge}><Text style={{color: colors.ashMid, fontSize: fontSize.caption, fontWeight: fontWeight.regular}}>Starting at </Text>${price}</Text>
            </View>
            <Text style={styles.orgText}>{time}</Text>
          </View>
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
    borderRadius: 10,
    // backgroundColor: colors.linen,
  },
  row: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    // height: 39,
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.cardBorder,
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
    fontWeight: fontWeight.medium,
    color: colors.coralDark,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.cardBorder,
    alignSelf: "flex-start",
  },
  orgText: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.regular,
    flexShrink: 1,
    color: colors.ashMid,
  },
});
