import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-bold">Welcome to Yumii</Text>
      <Link href="/sign-in">Sign-In</Link>
    </View>
  );
};

export default index;
