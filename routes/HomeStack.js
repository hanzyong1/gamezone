import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "#eee" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewDetailsScreen"
        component={ReviewDetails}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}
