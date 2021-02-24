import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 5px;
  padding: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.02);
`;
export const Tipo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const IconView = styled.View`
  flex-direction: row;
  background-color: ${(props) =>
    props.tipo === "despesa" ? "#c62c36" : "#049301"};
  padding-bottom: 3px;
  padding-top: 3px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 7px;
`;
export const ValorText = styled.Text`
  font-style: italic;
  color: #000;
  font-size: 23px;
  font-weight: bold;
`;
export const TipoText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-style: italic;
`;

export const Data = styled.Text`
  font-size: 17px;
`;

export const ViewLixeira = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonLixeira = styled.TouchableOpacity``;

export const NomeText = styled.Text`
  font-size: 23px;
  font-weight: bold;
  font-family: "Roboto";
  font-style: italic;
`;
