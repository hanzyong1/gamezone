import React from "react";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import Home from "./screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
}
