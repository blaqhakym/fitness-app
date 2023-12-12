import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  const router = useRouter();
  return (
    <View className="flex-1 justify-end">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Image
        source={require("../assets/images/welcome.png")}
        className="w-full h-full absolute"
      />
      <LinearGradient
        style={{
          width: wp("100%"),
          height: hp("50%"),
        }}
        colors={["transparent", "#18181b"]}
        className="flex justify-end pb-12 space-y-8">
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center">
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white tracking-wide font-bold">
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white tracking-wide font-bold">
            For you
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-neutral-200 border-[2px]"
            onPress={() => router.push("/home")}>
            <Text className="text-white font-bold tracking-widest">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
}
