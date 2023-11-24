import { styles } from "./styles";
import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../../components/atoms/Input";
import Patient from "../../../components/molecules/Patient";
import Container from "../../../components/atoms/Container";

import { api } from "../../../../src/services/api";
import { Patient as PatientType } from "../../../../src/services/models/patient";
import { AuthContext } from "../../../../src/context/auth.context";

const Patients = () => {
  const { user } = useContext(AuthContext);
  const [patients, setPatients] = useState<PatientType[]>();

  useEffect(() => {
    api
      .get(`Patient/GetByDoctorCrm?crm=${user.Crm}`)
      .then((res) => setPatients(res.data));
  }, []);

  const onSearch = (value) => {
    setPatients(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar pacientes"
        onSearch={onSearch}
        type="search"
        itens={patients}
        props={["patient"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {patients?.map((item) => (
          <View
            style={styles.wrapper}
            key={item.patientId}
            onStartShouldSetResponder={() => true}
          >
            <Patient
              patient={item.name}
              lastAppointment={item.modifiedAt}
              age={24}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Patients;
