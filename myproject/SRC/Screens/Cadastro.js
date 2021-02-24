import React from "react";
import { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contexto/auth";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigation();
  const { CriarConta, loadingAuth } = useContext(AuthContext);

  function Cadastro() {
    CriarConta(nome, Email, senha);
    Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Paroquia nossa senhora de fátima</Text>
      </View>

      <View>
        <TextInput
          style={styles.senha}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
          value={Email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.senha}
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View>
        <TextInput
          style={styles.senha}
          placeholder="Senha"
          autoCorrect={false}
          autoCapitalize="none"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />

        <View style={styles.Viewbutton}>
          <TouchableOpacity style={styles.button} onPress={Cadastro}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <Text style={{ color: "#1C1C1C", fontWeight: "bold" }}>
                Criar
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonVoltar}
            onPress={() => navigate.navigate("Login")}
          >
            <Text style={{ color: "#1C1C1C", fontWeight: "bold" }}>
              Voltar ao login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  senha: {
    marginTop: 20,
    borderColor: "#00BFFF",
    borderRadius: 5,
    padding: 5,
    height: 50,
    width: 300,
    borderWidth: 1,
  },
  imagem: {
    width: 300,
  },
  titulo: {
    fontSize: 35,
    width: 300,
    fontWeight: "bold",
    color: "#00BFFF",
    marginHorizontal: 30,
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "#00BFFF",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 20,
  },
  Viewbutton: {
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    marginTop: 20,
  },
  SingUp: {
    fontWeight: "bold",
    color: "#1C1C1C",
  },
  buttonVoltar: {
    marginTop: 20,
  },
});
