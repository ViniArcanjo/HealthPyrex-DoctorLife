import { styles } from "./styles";

import { useContext } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import Container from "../../../components/atoms/Container";

import { AuthContext } from "../../../../src/context/auth.context";

const Profile = () => {
  const { navigate } = useNavigation<any>();
  const { onLeave } = useContext(AuthContext);

  const confirmLeave = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          onLeave().then(() => navigate("Login"));
        },
      },
    ]);
  };

  return (
    <Container paddingVertical={48}>
      <Text style={styles.leave} bold onPress={confirmLeave}>
        Sair
      </Text>
    </Container>
  );
};

export default Profile;
