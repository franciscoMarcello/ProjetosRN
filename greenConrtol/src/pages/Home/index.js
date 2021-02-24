import React from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Menu from "../../Componentes/Menu";
import DatePiker from "../../Componentes/DatePiker/index";
import {
  Container,
  Background,
  Nome,
  Saldo,
  Title,
  List,
  CalendarioView,
  Button,
  IconView,
} from "./styles";
import { useState } from "react/cjs/react.development";
import HistoricoList from "../../Componentes/HistoricoList";
import firebase from "../../services/firebaseConnection";
import Icon from "react-native-vector-icons/Feather";
import { isBefore, format } from "date-fns";
import { Alert, Platform } from "react-native";
import { onChange } from "react-native-reanimated";
export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });
      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(newDate, "dd/MM/yyyy"))
        .limitToLast(20)
        .on("value", (snapshot) => {
          setHistorico([]);
          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              nome: childItem.val().nomeDoRegistro,
              tipo: childItem.val().tipo,
              valor: childItem
                .val()
                .valor.toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
              date: childItem.val().date,
            };
            setHistorico((oldArray) => [...oldArray, list].reverse());
          });
        });
    }
    loadList();
  }, [newDate]);
  function habdleDelete(data) {
    Alert.alert(
      "Cuidado Atenção!",
      `Você deseja excluir essa movimentação:\nNome:${data.nome}\nTipo:${data.tipo}\nValor:${data.valor}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => handleDeleteSuccess(data),
        },
      ]
    );
  }
  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === "despesa"
          ? (saldoAtual += parseFloat(data.valor))
          : (saldoAtual -= parseFloat(data.valor));
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .child("saldo")
          .set(saldoAtual);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleShowPicker() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  const onChange = (date) => {
    setShow(Platform.os === "ios");
    setNewDate(date);
    console.log(date);
  };
  return (
    <Background>
      <Menu />
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Saldo>
      </Container>
      <CalendarioView>
        <Title>Ultimas movimentações</Title>
        <Button onPress={handleShowPicker}>
          <IconView>
            <Icon name="calendar" color="#fff" size={25} />
          </IconView>
        </Button>
      </CalendarioView>
      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={habdleDelete} />
        )}
      />
      {show && (
        <DatePiker onClose={handleClose} date={newDate} onChange={onChange} />
      )}
    </Background>
  );
}
