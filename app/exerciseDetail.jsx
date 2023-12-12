import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Anticons from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-virtualized-view";
import Animated, { FadeInDown } from "react-native-reanimated";

const exerciseDetail = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="mx-2 absolute rounded-full mt-6 right-0">
          <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
        </TouchableOpacity>
      </View>
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}>
        <Animated.Text
          entering={FadeInDown.duration(300).springify()}
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}>
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300).springify()}
          className="font-semibold text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}>
          Equipment:{" "}
          <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(200).duration(300).springify()}
          className="text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}>
          Secondary Muscle:{" "}
          <Text className="font-bold text-neutral-800">
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(300).duration(300).springify()}
          className="text-neutral-700 tracking-wide"
          style={{ fontSize: hp(2) }}>
          Target:{" "}
          <Text className="font-bold text-neutral-800">{item.target}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(400).duration(300).springify()}
          className="text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}>
          Instructions
        </Animated.Text>

        {item.instructions.split(",").map((instruction, index) => (
          <Animated.Text
          entering={FadeInDown.delay((index + 6)*100).duration(300).springify()}
            key={instruction}
            style={{ fontSize: hp(1.7) }}
            className="text-neutral-800">
            {instruction}
          </Animated.Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetail;
