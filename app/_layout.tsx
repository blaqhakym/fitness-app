import { View, Text, Button } from "react-native";
import React from "react";
import { Stack,  useRouter } from "expo-router";

export default function _layout() {

  const router = useRouter()
  return (
    <Stack
      screenOptions={{
        headerStyle: {},
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          headerRight: () => (
            <Button title="Login" onPress={() => router.push("/login")} />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: "login",
          presentation: "modal",
        }}
      />

      <Stack.Screen
        name="[missing]"
        options={{
          title: "404",
        }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
