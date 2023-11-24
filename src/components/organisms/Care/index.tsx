import { styles } from "./styles";

import { useState, useEffect, useContext } from "react";
import { View, ScrollView } from "react-native";

import Input from "../../../components/atoms/Input";
import Container from "../../../components/atoms/Container";
import CareItem from "../../../components/molecules/CareItem";

import { Appointment } from "../../../../src/services/models/appointment";
import { AuthContext } from "../../../../src/context/auth.context";
import { api } from "../../../../src/services/api";

const Care = () => {
  const { user } = useContext(AuthContext);

  const [care, setCare] = useState<Appointment[]>();

  useEffect(() => {
    api
      .get(
        `Appointment/${
          (user.Cpf && `GetByPatientCpf?cpf=${user.Cpf}`) ||
          (user.Crm && `GetByDoctorCrm?crm=${user.Cpf}`)
        }`
      )
      .then((res) => setCare(res.data));
  }, []);

  const onSearch = (value) => {
    setCare(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar pacientes"
        onSearch={onSearch}
        type="search"
        itens={care}
        props={["patient"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {care.map((item) => (
          <View
            style={styles.itemContent}
            onStartShouldSetResponder={() => true}
          >
            <CareItem
              key={item.appointmentId}
              care={"teste"}
              patient={item.patient}
              date={item.appointmentDate}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Care;
