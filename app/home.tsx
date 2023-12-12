import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts"


export default function home() {
  return (
    <SafeAreaView className="flex flex-1 space-y-5 " edges={["top"]}>
      <StatusBar style="dark" />
      {/* punchline and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700">
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500">
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ width: hp(6), height: hp(6) }}
            className="rounded-full"
          />
          <View
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[2px]"
            style={{ height: hp(5.5), width: hp(5.5) }}>
            <Ionicons name="notifications" size={hp(3)} color={"gray"} />
          </View>
        </View>
      </View>
      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

      {/* body parts list*/}
      <View>
<BodyParts/>
      </View>
    </SafeAreaView>
  );
}
