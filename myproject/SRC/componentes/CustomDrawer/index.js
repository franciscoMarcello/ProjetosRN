import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { AuthContext } from "../../contexto/auth";
export default function CustomDrawer(props) {
  const { user, singOut } = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("../../imagem/images.jpg")}
          style={{ width: 85, height: 85 }}
        />
        <Text style={{ color: "#fff", fontSize: 18, marginTop: 5 }}>
          Bem-vindo
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            paddingBottom: 25,
          }}
        >
          {user && user.nome}
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair do app"
        inactiveBackgroundColor="#c62c36"
        onPress={() => singOut()}
      />
    </DrawerContentScrollView>
  );
}
