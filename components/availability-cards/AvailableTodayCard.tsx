import { StyleSheet, Text, View } from "react-native";

export default function AvailableTodayCard() {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.label}>Available Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: "#16A34A",
    backgroundColor: "#86efad67",
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  dot: {
    height: 8,
    aspectRatio: 1,
    backgroundColor: "#16A34A",
    borderRadius: 4,
  },
  label: {
    color: "#166534",
    fontWeight: "600",
  },
});