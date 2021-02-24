import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import Menu from "../../Componentes/Menu";
import {
  Container,
  Nome,
  NewLink,
  NewText,
  Logout,
  LogoutText,
} from "./styles";

export default function Perfil() {
  const navigarion = useNavigation();
  const { user, singOut } = useContext(AuthContext);
  return (
    <Container>
      <Menu />
      <Nome>{user && user.nome}</Nome>
      <NewLink onPress={() => navigarion.navigate("Registrar")}>
        <NewText>Registrar gastos</NewText>
      </NewLink>
      <Logout onPress={() => singOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}
