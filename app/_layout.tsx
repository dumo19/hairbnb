import { Tabs } from "expo-router";
import { CircleUserRound, Compass, Home, MessageCircle } from "lucide-react-native";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size}/>
          ),
          title: "home"
        }}
      />
      <Tabs.Screen name="explore" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Compass color={color} size={size}/>
          ),
        }} />
        <Tabs.Screen name="messages" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MessageCircle color={color} size={size}/>
          ),
        }} />
      <Tabs.Screen name="account" options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <CircleUserRound color={color} size={size}/>
          ),
        }} />
    </Tabs>
  );
}
