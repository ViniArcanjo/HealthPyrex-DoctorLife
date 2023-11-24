import { styles } from "./styles";

import { useState, useEffect, useContext } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../atoms/Input";
import Exam from "../../molecules/Exam";
import Container from "../../../components/atoms/Container";
import { Exam as ExamType } from "src/services/models/exam";

import { api } from "../../../../src/services/api";
import { AuthContext } from "../../../../src/context/auth.context";

const Exams = () => {
  const { user } = useContext(AuthContext);

  const [inital, setIntial] = useState<ExamType[]>();
  const [exams, setExams] = useState<ExamType[]>();

  useEffect(() => {
    if (user.Crm || user.Cpf) {
      api
        .get(
          `Test/${
            (user.Cpf && `GetByPatientCpf?cpf=${user.Cpf}`) ||
            (user.Crm && `GetByDoctorCrm?crm=${user.Crm.replace(/\//g, "%2F")}`)
          }`
        )
        .then((res) => {
          setIntial(res.data);
          setExams(res.data);
        });
    }
  }, []);

  const onSearch = (value) => {
    setExams(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar exames"
        onSearch={onSearch}
        type="search"
        itens={exams}
        props={["title", "description"]}
        initial={inital}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {exams?.map((item) => (
          <View
            style={{ paddingTop: 14 }}
            key={item.appointmentId}
            onStartShouldSetResponder={() => true}
          >
            <Exam
              title={item.title}
              description={item.description}
              doctor={item.appointment.doctor.name}
              date={item.testDate}
            />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Exams;
