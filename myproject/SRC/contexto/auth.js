import React, { useState, createContext, useEffect } from "react";
import firebase from "../Services/firebaseConection";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function Entrar(Email, senha) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(Email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch((erro) => {
        alert(erro.code);
        setLoadingAuth(false);
      });
  }

  async function CriarConta(nome, Email, senha) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(Email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            nome: nome,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.Email,
            };
            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
          });
      })
      .catch((erro) => {
        alert(erro.code);
        setLoadingAuth(false);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
  }

  async function singOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        CriarConta,
        Entrar,
        singOut,
        loadingAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
