import { styles } from "./index.style";
import { useState } from "react";
import { FlatList, View } from "react-native";

import { Input } from "../../atoms/Input";
import ItemAppointment from "../../molecules/ItemAppointment";

const appointment = [
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
  const [appointmentList, setAppointmentList] = useState(appointment);

  const onSearch = (value) => {
    setAppointmentList(appointment);

    if (value) {
      const newList = appointmentList.filter(
        (q) =>
          q.appointment
            .toLocaleUpperCase()
            .includes(value?.toLocaleUpperCase()) ||
          q.doctor.toLocaleUpperCase().includes(value?.toLocaleUpperCase())
      );

      setAppointmentList(newList);
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Buscar" onSearch={onSearch} />

      <FlatList
        data={appointmentList}
        renderItem={({ item }) => (
          <View style={styles.itemContent}>
            <ItemAppointment
              appointment={item.appointment}
              doctor={item.doctor}
              date={item.date}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Appointments;
