import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          headerTitle: "GameZone",
        }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          title: "About",
          headerTitle: "About GameZone",
        }}
      />
    </Drawer.Navigator>
  );
}
