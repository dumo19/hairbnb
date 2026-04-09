import { Tabs } from "expo-router";
import { useRole } from "../../context/RoleContext";

export default function TabLayout() {
  const { role } = useRole();

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Client screens */}
      <Tabs.Screen
        name="client/explore"
        options={{
          href: role === "client" ? undefined : null,
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="client/messages"
        options={{
          href: role === "client" ? undefined : null,
          title: "Messages",
        }}
      />
      <Tabs.Screen
        name="client/account"
        options={{
          href: role === "client" ? undefined : null,
          title: "Profile",
        }}
      />

      {/* Pro screens */}
      <Tabs.Screen
        name="pro/dashboard"
        options={{
          href: role === "pro" ? undefined : null,
          title: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="pro/account"
        options={{ href: role === "pro" ? undefined : null, title: "Profile" }}
      />
    </Tabs>
  );
}
