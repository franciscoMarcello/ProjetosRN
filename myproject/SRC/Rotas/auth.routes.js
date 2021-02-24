import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Cadastro from "../Screens/Cadastro";

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          headerStyle: {
            backgroundColor: "#ffff",
            borderBottomColor: "#00ff",
            borderBottomWidth: 1,
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerTitle: "Voltar",
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
