import { styles } from "./styles";

import { useContext } from "react";
import { Image, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Button from "../../../components/atoms/Button";
import Container from "../../../components/atoms/Container";
import Exam from "../../../components/molecules/Exam";
import Appointment from "../../../components/molecules/Appointment";

import { AuthContext } from "../../../../src/context/auth.context";
import { AppColors } from "../../../../src/config/colors";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const onNavigate = () => {
    navigate("");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container} onStartShouldSetResponder={() => true}>
        <View style={styles.infos}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
          />

          <Text style={styles.text} bold>
            Bem vinde <Text>{user.Name}</Text>
          </Text>
        </View>
        <Container paddingVertical={48} gap={32}>
          {user.role === "Patient" && (
            <>
              <Button onPress={() => {}} type="full">
                Agendar consulta
              </Button>

              <View style={styles.item}>
                <Text style={{ color: AppColors.primary }} bold>
                  Próximas consultas:
                </Text>
                <Appointment
                  appointment="Eletrocardiograma"
                  doctor="Filipe Pedroso"
                  date="02/12/2023 15:00"
                />
              </View>

              <View style={styles.item}>
                <Text style={{ color: AppColors.primary }} bold>
                  Próximos exames:
                </Text>
                <Exam title="TSH" date="02/12/2023 15:00" />
              </View>
            </>
          )}
        </Container>
      </View>
    </ScrollView>
  );
};

export default Home;
