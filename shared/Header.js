import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.header}>
        <MaterialIcons
          name="menu"
          size={28}
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.icon}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#ccc",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#444",
  },
});
