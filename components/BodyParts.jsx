import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import BodyPartCard from "../components/BodyPartCard";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";

export default function BodyParts() {
  const router = useRouter();
  return (
    <View className="mx-4 ">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700">
        BodyParts
      </Text>
      
        <FlatList
          data={bodyParts}
          numColumns={2}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item, index }) => (
            <BodyPartCard router={router} item={item} index={index} />
          )}
        />
      
    </View>
  );
}
