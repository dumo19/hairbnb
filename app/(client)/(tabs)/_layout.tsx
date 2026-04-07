import { Tabs } from "expo-router";
import {
  Calendar,
  CircleUserRound,
  Compass,
  LayoutGrid,
  MessageCircle,
} from "lucide-react-native";
import { NativeTabs } from 'expo-router/unstable-native-tabs';


export default function RootLayout() {
  return (
    <Tabs>
      
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
    // <NativeTabs>
    // backgroundColor={"grey"}
    //   indicatorColor={"blue"}
    //   <NativeTabs.Trigger name="account">
    //     <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
    //     <NativeTabs.Trigger.Icon
    //       src={require('@/assets/images/compass.png')}
    //       renderingMode="template"
    //     />
    //   </NativeTabs.Trigger>

    //   <NativeTabs.Trigger name="explore">
    //     <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
    //     <NativeTabs.Trigger.Icon
    //       src={require('@/assets/images/compass.png')}
    //       renderingMode="template"
    //     />
    //   </NativeTabs.Trigger>
    // </NativeTabs>
  );
}
