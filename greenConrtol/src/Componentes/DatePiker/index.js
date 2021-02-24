import React, { useState } from "react";
import { View, Platform, TouchableOpacity, Text } from "react-native";
import DateTimerPicker from "@react-native-community/datetimepicker";
import { Container, Header } from "./styles";
export default function DatePiker({ date, onChange, onClose }) {
  const [dateNow, setDateNow] = useState(new Date(date));
  return (
    <Container>
      {Platform.os === "ios" && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimerPicker
        value={dateNow}
        mode="date"
        display="calendar"
        onChange={(e, d) => {
          const currentDate = d || dateNow;
          setDateNow(currentDate);
          onChange(currentDate);
        }}
        style={{ backgroundColorColor: "#fff" }}
      />
    </Container>
  );
}
