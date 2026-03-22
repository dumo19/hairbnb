// import { Button } from "@react-navigation/elements";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { Bookmark, ChevronLeft } from "lucide-react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function UserPage() {
  const firstName = "Charles";
  const lastName = "Carmichael";
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "grey",
          position: "relative",
        }}
      >
        {/* <SafeAreaView> */}
        <TouchableOpacity
          style={[styles.topButton, { right: 0, marginRight: 20 }]}
        >
          <Bookmark />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.topButton, { left: 0, marginLeft: 20 }]}
        >
          <ChevronLeft />
        </TouchableOpacity>
        {/* </SafeAreaView> */}
      </View>

      <View
        style={{
          borderWidth: 1,
          padding: 20,
          margin: 20,
          borderRadius: 25,
          marginTop: -50,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View
            style={{
              aspectRatio: 1,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
          />

          <View>
            <Text
              style={{ fontWeight: "700", fontSize: 24 }}
            >{`${firstName} ${lastName}`}</Text>
            <Text>Barber • Stylist</Text>
            <Text>Saint Paul, MN • 0.8 mi</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          <View style={[styles.headerBox, { borderRightWidth: 1 }]}>
            <Text style={styles.headerBoxMaintext}>4.9</Text>
            <Text style={styles.headerBoxSecondText}>Rating</Text>
          </View>
          <View style={[styles.headerBox, { borderRightWidth: 1 }]}>
            <Text style={styles.headerBoxMaintext}>8 yr</Text>
            <Text style={styles.headerBoxSecondText}>Experience</Text>
          </View>
          <View style={styles.headerBox}>
            <Text style={styles.headerBoxMaintext}>$$</Text>
            <Text style={styles.headerBoxSecondText}>Price</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "green",
              // backgroundColor: "darkgreen",
              paddingVertical: 4,
              paddingHorizontal: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderRadius: 8,
              // width: "auto"
              alignSelf: "flex-start",
            }}
          >
            <View
              style={{
                height: 8,
                aspectRatio: 1,
                backgroundColor: "green",
                borderRadius: 4,
              }}
            />
            <Text style={{ color: "green", fontWeight: "600" }}>
              Available Today
            </Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, flexDirection: "row" , gap: 10}}>
        <TouchableOpacity style={styles.messageButton}>
          <Text style={styles.messageButtonText}>{`Contact ${firstName}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="facebook-f" size={21} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="instagram" size={21} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name="tiktok" size={21} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        {/* <Text>{`${firstName}'s work`}</Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topButton: {
    position: "absolute",
    top: 70,
    // right: 0,
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    // marginRight: 20
  },
  tag: { paddingVertical: 5, paddingHorizontal: 10, borderRadius: 100 },
  tagText: { color: "white", fontWeight: "700", fontSize: 12 },
  headerBox: {
    // backgroundColor: "lightgrey",
    flex: 1,
    paddingVertical: 10,
    // aspectRatio: 1,
    // borderRadius: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    // padding: 20
  },
  headerBoxMaintext: {
    fontWeight: "600",
    fontSize: 20,
  },
  headerBoxSecondText: {
    fontSize: 14,
  },
  messageButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center"
  },
  messageButtonText: {
    fontWeight: "600",
    fontSize: 16,
  },
  socialButton: {
    // backgroundColor: "lightgrey",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white"

  },
});
