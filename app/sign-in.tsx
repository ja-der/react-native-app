import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="flex items-center justify-center">
          <Text className="text-black font-bold text-lg">
            Login to Yumii with Google
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-slate-50 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
        >
          <View className="flex items-center justify-center">
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
