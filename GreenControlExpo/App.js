import React from "react";
import "react-native-gesture-handler";
import { View, StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "./src/services/firebaseConnection";
import Routes from "./src/routes/index";
import AuthProvider, { AuthContext } from "./src/contexts/auth";

console.disableYellowBox = true;
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
    
  );
}
