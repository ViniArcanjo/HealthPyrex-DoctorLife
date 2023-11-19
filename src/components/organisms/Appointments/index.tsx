import { styles } from "./styles";
import { useState } from "react";
import { FlatList, View } from "react-native";

import Input from "../../atoms/Input";
import Appointment from "../../molecules/Appointment";
import Container from "../../../components/atoms/Container";

const appointments = [
  {
    key: "1",
    appointment: "Consulta Oftalmo",
    doctor: "Frank Gualberto",
    date: "01/11/2023 08:00",
  },
  {
    key: "2",
    appointment: "Consulta Cardiologista",
    doctor: "Neli Knupp",
    date: "05/10/2023 17:00",
  },
  {
    key: "3",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
];

const Appointments = () => {
  const [appointmentList, setAppointmentList] = useState(appointments);

  const onSearch = (value) => {
    setAppointmentList(value);
  };

  return (
    <Container>
      <Input
        placeholder="Buscar"
        onSearch={onSearch}
        type="search"
        itens={appointmentList}
        props={["appointment", "doctor"]}
      />

      <FlatList
        data={appointmentList}
        renderItem={({ item }) => (
          <View style={styles.itemContent}>
            <Appointment
              appointment={item.appointment}
              doctor={item.doctor}
              date={item.date}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Appointments;
