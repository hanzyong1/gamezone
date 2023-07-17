import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground
        source={require("../assets/game_bg.png")}
        style={styles.header}
      >
        <MaterialIcons
          name="menu"
          size={28}
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.icon}
        />
        <View style={styles.headerTitle}>
          <Image
            source={require("../assets/heart_logo.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </ImageBackground>
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
    elevation: 5,
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
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
