import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ExplorePage() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Explore page</Text>
      <Button title="user page" onPress={() => router.push("/explore/1")} />
    </View>
  );
}
