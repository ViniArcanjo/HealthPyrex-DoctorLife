import { styles } from "./styles";
import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../atoms/Input";
import Container from "../../../components/atoms/Container";
import Appointment from "../../molecules/Appointment";

import { api } from "../../../../src/services/api";
import { AuthContext } from "../../../../src/context/auth.context";
import { Appointment as AppointmentType } from "../../../../src/services/models/appointment";

const Appointments = () => {
  const { user } = useContext(AuthContext);

  const [inital, setIntial] = useState<AppointmentType[]>();
  const [appointments, setAppointments] = useState<AppointmentType[]>();

  useEffect(() => {
    api
      .get(
        `Appointment/${
          (user.Cpf && `GetByPatientCpf?cpf=${user.Cpf}`) ||
          (user.Crm && `GetByDoctorCrm?crm=${user.Cpf}`)
        }`
      )
      .then((res) => {
        setIntial(res.data);
        setAppointments(res.data);
      });
  }, []);

  const onSearch = (value) => {
    setAppointments(value);
  };

  console.log(appointments);

  return (
    <Container>
      <Input
        placeholder="Pesquisar consultas"
        onSearch={onSearch}
        type="search"
        itens={appointments}
        props={["title"]}
        initial={inital}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {appointments?.map((item) => (
          <View
            style={styles.itemContent}
            key={item.appointmentId}
            onStartShouldSetResponder={() => true}
          >
            <Appointment
              appointment={item.title}
              doctor={item.doctor.name}
              date={item.appointmentDate}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Appointments;
