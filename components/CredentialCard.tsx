import { colors } from "@/constants/theme";
import { scissorsHairComb } from "@lucide/lab";
import { FileBadge, Icon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function CredentialCard({
  title,
  org,
  year,
}: {
  title: string;
  org: string;
  year: string;
}) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.iconContainer}>
          <FileBadge color={colors.primary}/>
        </View>
        <View style={styles.textContainer}>
          <View style={{ flexDirection: "column", flex: 1, marginRight: 10 }}>
            <Text style={{ fontWeight: "700", fontSize: 16, color: colors.headingText }}>{title}</Text>
            <Text style={{ fontSize: 12, flexShrink: 1, color: colors.bodyText }}>{org}</Text>
          </View>
          <Text style={{ fontWeight: "600", color: colors.bodyText }}>{year}</Text>
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
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.08,
    // shadowRadius: 12,
    // elevation: 4,
  },
  iconContainer: {
    backgroundColor: "#FFE0DB",
    // borderWidth: 1,
    height: 48,
    aspectRatio: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
    flex: 1,
    // backgroundColor: "orange"
  },
});
