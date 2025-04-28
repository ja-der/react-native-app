import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

// random sample data
const restaurants = [
  {
    id: "1",
    name: "Sushi World",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
    location: "Downtown",
  },
  {
    id: "2",
    name: "Pasta Palace",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    location: "Uptown",
  },
  {
    id: "3",
    name: "Burger Barn",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    location: "Midtown",
  },
  {
    id: "4",
    name: "Morning Brew Café",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    location: "Old Town",
  },
];

const Explorer = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Explore</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity className="mb-4 rounded-2xl overflow-hidden shadow-md bg-white">
            <Image
              source={{ uri: item.image }}
              className="h-40 w-full"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="font-bold text-xl">{item.name}</Text>
              <Text className="text-black">{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Explorer;
