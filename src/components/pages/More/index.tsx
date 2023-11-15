import { styles } from "./styles";

import { useContext } from "react";
import { Alert, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../components/atoms/Text";
import { AuthContext } from "../../../../src/context/auth.context";

const More = () => {
  const { navigate } = useNavigation<any>();
  const { setIsLoggedIn } = useContext(AuthContext);

  const confirmLeave = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => {
          setIsLoggedIn(false);
          navigate("Login");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.leave} bold onPress={confirmLeave}>
        Sair
      </Text>
    </View>
  );
};

export default More;
