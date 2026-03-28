import { Tabs } from "expo-router";
import {
  Calendar,
  CircleUserRound,
  Compass,
  LayoutGrid,
  MessageCircle,
} from "lucide-react-native";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <LayoutGrid color={color} size={size} />
          ),
          title: "home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Compass color={color} size={size} />
          ),
          title: "explore",
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Calendar color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <CircleUserRound color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
