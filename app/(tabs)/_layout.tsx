import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="explorer"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          title: "Diary",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
