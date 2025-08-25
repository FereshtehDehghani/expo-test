import { StyleSheet } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { CustomTabButton } from "@/components/CustomTabButton";

export default function Layout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={styles.tabList}>
        <TabTrigger name='home' href='/' asChild>
          <CustomTabButton icon='home'>Home</CustomTabButton>
        </TabTrigger>
        <TabTrigger name='search' href='/about' asChild>
          <CustomTabButton icon='search'>Search</CustomTabButton>
        </TabTrigger>
        <TabTrigger name='settings' href='/settings' asChild>
          <CustomTabButton icon='settings'>Settings</CustomTabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    display: "flex",
    position: "absolute",
    bottom: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    padding: 8,
  },
});
