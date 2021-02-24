import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator, Keyboard } from "react-native";
import {
  Background,
  Container,
  Logo,
  Input,
  AreaInput,
  SubmitButton,
  SubmitText,
  LinkText,
} from "../Signln/styles";
import { AuthContext } from "../../contexts/auth";
import firebase from "..";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const { signUp, loadingAuth } = useContext(AuthContext);

  function handSignUp() {
    signUp(nome, email, senha);
    Keyboard.dismiss();
  }
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""}>
        <Logo source={require("../../assets/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
            inputType="textEmailAddress"
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

        <SubmitButton onPress={handSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
