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
    user.Crm &&
      api
        .get(`Appointment/GetByDoctorCrm?crm=${user.Crm.replace(/\//g, "%2F")}`)
        .then((res) => setCare(res.data));
  }, [user]);

  const onSearch = (value) => {
    setCare(value);
  };

  console.log(care);

  return (
    <Container>
      <Input
        placeholder="Pesquisar atendimentos"
        onSearch={onSearch}
        type="search"
        itens={care}
        props={["title"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {care?.map((item) => (
          <View
            style={styles.itemContent}
            onStartShouldSetResponder={() => true}
            key={item.appointmentId}
          >
            <CareItem
              care={item.title}
              patient={item.patient.name}
              date={item.appointmentDate}
              description={item.description}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Care;
