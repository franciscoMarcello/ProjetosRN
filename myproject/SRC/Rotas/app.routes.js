import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screens/Home";
import CustomDrawer from "../componentes/CustomDrawer/index";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: "#171717",
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        activeTintColor: "#fff",
        activeBackgroundColor: "#00b94a",
        inactiveBackgroundColor: "#000",
        inactiveTintColor: "#ddd",
        itemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
