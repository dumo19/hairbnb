import { colors } from "@/constants/colors";
import { fontSize, fontWeight } from "@/constants/fonts";
import { Calendar, School } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

/**
 * JSX element to display a professional's credentials or cetrifications
 * @param param0
 * @returns
 */
export default function CredentialCard({
  title,
  org,
  year,
  top,
  bottom,
}: {
  title: string;
  org: string;
  year: string;
  top: boolean;
  bottom: boolean;
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
          <Award color={colors.coral} size={20} />
        </View> */}
        <View style={styles.textContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.infoRow}>
              <School size={fontSize.secondary} color={colors.ashMid} />
              <Text style={styles.orgText}>{org}</Text>
            </View>
            <View style={styles.infoRow}>
              <Calendar size={fontSize.secondary} color={colors.ashMid} />
              <Text style={styles.yearText}>{year}</Text>
            </View>
          </View>

          {/* <Text style={styles.yearBadge}>{year}</Text> */}
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
    // backgroundColor: "orange",
    // marginLeft: 10,
    // flexWrap: "wrap"
  },
  leftColumn: {
    flex: 1,
    flexShrink: 1,
    marginRight: 10,
  },
  textColumn: {
    flex: 1,
    flexDirection: "column",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  titleText: {
    fontWeight: fontWeight.medium,
    fontSize: fontSize.body,
    color: colors.ink,
  },
  yearBadge: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.semibold,
    color: colors.coralDark,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: colors.coral,
    alignSelf: "flex-start",
  },
  orgText: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.medium,
    flexShrink: 1,
    color: colors.ashMid,
    flexWrap: "wrap",
  },
  yearText: {
    fontSize: fontSize.secondary,
    fontWeight: fontWeight.regular,
    flexShrink: 1,
    color: colors.ashMid,
    flexWrap: "wrap",
  },
  infoRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
