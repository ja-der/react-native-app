import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="sign-in"
        options={{
          title: "Sign-In",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
