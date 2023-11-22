import { styles } from "./styles";
import { useState } from "react";
import { ScrollView, View } from "react-native";

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
  {
    key: "4",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
  {
    key: "5",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
  {
    key: "6",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
  {
    key: "7",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
  {
    key: "8",
    appointment: "Consulta Otorrino",
    doctor: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
  {
    key: "9",
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
        placeholder="Pesquisar médicos, consultas"
        onSearch={onSearch}
        type="search"
        itens={appointmentList}
        props={["appointment", "doctor"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {appointmentList.map((item) => (
          <View
            style={styles.itemContent}
            key={item.key}
            onStartShouldSetResponder={() => true}
          >
            <Appointment
              appointment={item.appointment}
              doctor={item.doctor}
              date={item.date}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Appointments;
