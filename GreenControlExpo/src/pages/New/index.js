import React from "react";
import {
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useState, useContext } from "react";
import Menu from "../../Componentes/Menu";
import { Background, SubmitButton, SubmitText, Input } from "./styles";
import Piker from "../../Componentes/Piker";
import firebase from "../../services/firebaseConnection";
import { format } from "date-fns";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function New() {
  const [valor, setValor] = useState("");
  const [nomeRegistro, setNomeRegistro] = useState("");
  const [tipo, setTipo] = useState(null);
  const { user: usuario } = useContext(AuthContext);
  const navigator = useNavigation();

  function handleSubmit() {
    Keyboard.dismiss();
    if (
      isNaN(parseFloat(valor)) ||
      tipo === null ||
      tipo === "select" ||
      nomeRegistro === ""
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    Alert.alert(
      "Confirmando dados",
      `Nome: ${nomeRegistro}\nTipo: ${tipo}\nValor: ${parseFloat(valor)}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleAdd(),
        },
      ]
    );
  }
  async function handleAdd() {
    let uid = usuario.uid;

    let key = await firebase.database().ref("historico").child(uid).push().key;
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(key)
      .set({
        nomeDoRegistro: nomeRegistro,
        tipo: tipo,
        valor: parseFloat(valor),
        date: format(new Date(), "dd/MM/yyyy"),
      });
    let user = firebase.database().ref("users").child(uid);
    await user.once("value").then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === "despesa"
        ? (saldo -= parseFloat(valor))
        : (saldo += parseFloat(valor));
      user.child("saldo").set(saldo);
    });
    Keyboard.dismiss();
    setTipo("select");
    setNomeRegistro("");
    setValor("");
    navigator.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Menu />
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Nome desejado"
            returnKeyType="next"
            value={nomeRegistro}
            onChangeText={(text) => setNomeRegistro(text)}
            onSubmitiEditing={() => Keyboard.dismiss()}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            value={valor}
            onChangeText={(text) => setValor(text)}
            onSubmitiEditing={() => Keyboard.dismiss()}
          />
          <Piker onChange={setTipo} tipo={tipo} />
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
