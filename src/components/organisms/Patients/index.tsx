import { styles } from "./styles";
import { useState } from "react";
import { FlatList, View } from "react-native";

import { Input } from "../../../components/atoms/Input";
import PatientItem from "../../../components/molecules/PatientItem";

const patients = [
  {
    key: "1",
    patient: "TSH",
    date: "01/11/2023",
    hour: "08:00",
  },
  {
    key: "2",
    patient: "Hemograma",
    date: "05/10/2023",
    hour: "10:00",
  },
  {
    key: "3",
    patient: "Exame de urina",
    date: "19/11/2023",
    hour: "17:00",
  },
  {
    key: "4",
    patient: "Exame de glicemia",
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
    <View style={styles.container}>
      <Input
        placeholder="Buscar"
        onSearch={onSearch}
        type="search"
        itens={patientList}
        props={["exame", "doctor"]}
      />

      <FlatList
        data={patientList}
        renderItem={({ item }) => (
          <View style={styles.itemContent}>
            <PatientItem
              key={item.key}
              patient={item.patient}
              date={item.date}
              hours={item.hour}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Patients;
