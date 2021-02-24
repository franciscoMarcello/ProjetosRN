import React from "react";
import Icon from "react-native-vector-icons/Feather";
import {
  Container,
  Tipo,
  IconView,
  ValorText,
  TipoText,
  Data,
  ViewLixeira,
  ButtonLixeira,
  NomeText,
} from "./styles";

export default function HistoricoList({ data, deleteItem }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon
            name={data.tipo === "Despesa" ? "arrow-down" : "arrow-up"}
            color="#fff"
            size={20}
          />

          <TipoText>{data.tipo}</TipoText>
        </IconView>
        <Data>{data.date}</Data>
      </Tipo>

      <NomeText>{data.nome}</NomeText>
      <ViewLixeira>
        <ValorText>R$ {data.valor}</ValorText>
        <ButtonLixeira onPress={() => deleteItem(data)}>
          <Icon name="trash-2" color="#000" size={25} />
        </ButtonLixeira>
      </ViewLixeira>
    </Container>
  );
}
