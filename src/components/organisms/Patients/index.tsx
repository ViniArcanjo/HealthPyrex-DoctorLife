import { styles } from "./styles";
import { useState } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../../components/atoms/Input";
import Patient from "../../../components/molecules/Patient";
import Container from "../../../components/atoms/Container";

const patients = [
  {
    key: "1",
    patient: "Carlos",
    date: "01/11/2023",
    hour: "08:00",
  },
  {
    key: "2",
    patient: "Amanda",
    date: "05/10/2023",
    hour: "10:00",
  },
  {
    key: "3",
    patient: "Tiago",
    date: "19/11/2023",
    hour: "17:00",
  },
  {
    key: "4",
    patient: "Dafine",
    date: "22/11/2023",
    hour: "15:30",
  },
];

const Patients = () => {
  const [patientList, setPatientList] = useState(patients);

  const onSearch = (value) => {
    setPatientList(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar pacientes"
        onSearch={onSearch}
        type="search"
        itens={patientList}
        props={["patient"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {patients.map((item) => (
          <View key={item.key} onStartShouldSetResponder={() => true}>
            <Patient
              patient={item.patient}
              date={item.date}
              hours={item.hour}
            />
          </View>
        ))}
        showsVerticalScrollIndicator={false}
      </ScrollView>
    </Container>
  );
};

export default Patients;
