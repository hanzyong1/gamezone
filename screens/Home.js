import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  titleText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
  },
});
