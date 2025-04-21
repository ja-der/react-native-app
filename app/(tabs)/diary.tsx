import { View, Text } from "react-native";
import React from "react";

type Entry = {
  id: number;
  restaurant: string;
  ethnicity: string;
  iamge: string;
  description: string;
};

const Diary = () => {

  const renderCard = ({item}: {item:Entry}) =>{}

  return (
    <View>
      <Text>diary</Text>
    </View>
  );
};

export default Diary;
