import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import About from "../screens/About";
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
        name="AboutScreen"
        component={About}
        options={{ header: () => <Header title="About GameZone" /> }}
      />
    </Stack.Navigator>
  );
}
