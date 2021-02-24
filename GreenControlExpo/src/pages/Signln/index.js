import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import {
  Background,
  Container,
  Logo,
  Input,
  AreaInput,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export default function Signln() {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, senha);
    Keyboard.dismiss();
  }

  return (
    <Background>
      <Container behavior={Platform.os == "ios" ? "padding" : ""}>
        <Logo source={require("../../assets/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => Navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
