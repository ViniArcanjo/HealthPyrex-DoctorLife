import { styles } from "./styles";

import { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Avatar from "../../../components/atoms/Avatar";
import Button from "../../../components/atoms/Button";
import Container from "../../../components/atoms/Container";
import Exam from "../../../components/molecules/Exam";
import Appointment from "../../../components/molecules/Appointment";

import { AuthContext } from "../../../../src/context/auth.context";
import { AppColors } from "../../../../src/config/colors";
import { api } from "../../../../src/services/api";

import { Exam as ExamType } from "../../../../src/services/models/exam";
import { Appointment as AppointmentType } from "../../../../src/services/models/appointment";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const [exams, setExams] = useState<ExamType[]>();
  const [appointments, setAppointments] = useState<AppointmentType[]>();

  useEffect(() => {
    api
      .get(
        `Test/${
          (user.Cpf && `GetByPatientCpf?cpf=${user.Cpf}`) ||
          (user.Crm && `GetByDoctorCrm?crm=${user.Cpf}`)
        }`
      )
      .then((res) => {
        res.data.sort((a, b) => {
          return (
            new Date(a.testDate).valueOf() - new Date(b.testDate).valueOf()
          );
        });

        setExams(res.data);
      });

    api
      .get(
        `Appointment/${
          (user.Cpf && `GetByPatientCpf?cpf=${user.Cpf}`) ||
          (user.Crm && `GetByDoctorCrm?crm=${user.Cpf}`)
        }`
      )
      .then((res) => {
        res.data.sort((a, b) => {
          return (
            new Date(a.appointmentDate).valueOf() -
            new Date(b.appointmentDate).valueOf()
          );
        });

        setAppointments(res.data);
      });
  }, []);

  const onClickSchendule = () => {
    navigate("Doctors");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <Avatar
          title={
            <Text style={styles.text} bold>
              Bem vind{user.Gender === "M" ? "o" : "a"} <Text>{user.Name}</Text>
            </Text>
          }
          sex={user.Gender}
        />

        <Container paddingVertical={48} gap={32}>
          <Button onPress={onClickSchendule} type="full">
            Agendar consulta
          </Button>

          <View style={styles.item}>
            <Text style={{ color: AppColors.primary }} bold>
              {user.role === "Patient"
                ? "Próximas consultas"
                : "Próximos atendimentos"}
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {appointments?.slice(0, 3)?.map((item) => (
                <View
                  style={{ paddingVertical: 8 }}
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
          </View>

          {user.role === "Patient" && (
            <View style={styles.item}>
              <Text style={{ color: AppColors.primary }} bold>
                Próximos exames
              </Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                {exams?.slice(0, 3)?.map((item) => (
                  <View
                    style={{ paddingVertical: 8 }}
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
            </View>
          )}
        </Container>
      </View>
    </ScrollView>
  );
};

export default Home;
