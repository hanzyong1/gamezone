import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

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
        options={{
          header: () => <Header title="GameZone" />,
        }}
      />
      <Stack.Screen
        name="ReviewDetailsScreen"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
