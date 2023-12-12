import { View, Text, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { fetchBodyPart } from "../utils/fetchExcercises";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();

  const { data, isLoading, error } = fetchBodyPart(item.name,10)

  if (isLoading) <ActivityIndicator size='small' />
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        style={{ width: hp(5.5), height: hp(5.5), marginTop: hp(7) }}
        className="bg-rose-500 absolute mx-4 flex justify-center items-center pr-1 rounded-full ">
        <Ionicons name="caret-back-outline" size={hp(4)} color={'white'} />
      </TouchableOpacity>
      {/* excercises */}

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">{item.name} exercises</Text>
        <View className="mb-10 ">
          <ExerciseList
            data={data}
            isLoading={isLoading}
          /> 
        </View>
        
      </View>
    </ScrollView>
  );
}
