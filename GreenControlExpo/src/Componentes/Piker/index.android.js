import React from "react";
import { PikerView } from "./styles";
import { Picker as RNPickerSelect } from "@react-native-picker/picker";

export default function Piker({ onChange, tipo }) {
  return (
    <PikerView>
      <RNPickerSelect
        style={{
          width: "100%",
        }}
        selectedValue={tipo}
        onValueChange={(valor) => onChange(valor)}
      >
        <RNPickerSelect.Item label="Selecione o tipo" value="select" />
        <RNPickerSelect.Item label="Receita" value="receita" />
        <RNPickerSelect.Item label="Despesa" value="despesa" />
      </RNPickerSelect>
    </PikerView>
  );
}
