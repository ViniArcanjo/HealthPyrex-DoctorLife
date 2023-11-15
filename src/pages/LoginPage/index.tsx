import { styles } from "./styles";
import { useContext, useState } from "react";
import { View, SafeAreaView, Alert, Switch } from "react-native";
import Checkbox from "expo-checkbox";

import Text from "../../components/atoms/Text";
import Button from "../../components/atoms/Button";
import { Input } from "../../components/atoms/Input";

import { AuthContext } from "../../context/auth.context";
import { AppColors } from "../../config/colors";

export function LoginPage({ navigation }) {
  const { setKeepConnected, signIn } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [keepUserConnected, setKeepUserConnected] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  function onUserEnterClick() {
    Alert.alert("entrou");
    if (!userEmail || !userPass) {
      Alert.alert("Digite seu email e senha!");
      return;
    }

    const user = {
      email: userEmail,
      password: userPass,
      role: isDoctor ? "doctor" : "patient",
      keepConnected: keepUserConnected,
    };

    signIn(user);

    navigation.navigate("Home");
  }

  function handleKeepUserConnected() {
    setKeepUserConnected(!keepUserConnected);
    setKeepConnected(keepUserConnected);
  }

  function toggleSwitch() {
    setIsDoctor(!isDoctor);
  }

  function onChangeEmail(value) {
    setUserEmail(value);
  }

  function onChangePassword(value) {
    setUserPass(value);
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.switchContainer}>
        <Text>Paciente</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: AppColors.dark_800, true: AppColors.primary }}
          onValueChange={toggleSwitch}
          value={isDoctor}
        />
        <Text>Médico</Text>
      </View>
      <View style={styles.loginFormContainer}>
        <Input
          onChange={onChangeEmail}
          label={"Login"}
          placeholder={"Digite aqui seu email"}
          type={"email-address"}
        />
        <View style={styles.passwordContainer}>
          <View style={styles.passwordInputContainer}>
            <Input
              onChange={onChangePassword}
              label={"Senha"}
              placeholder={"Digite aqui sua senha"}
              type={"password"}
            />
            <Text
              style={styles.passwordText}
              onPress={() =>
                Alert.alert("Redirecionando para redefinição de senha...")
              }
            >
              Esqueci minha senha
            </Text>
          </View>
          <View style={styles.keepConnectedContainer}>
            <Checkbox
              style={styles.checkbox}
              value={keepUserConnected}
              onValueChange={() => handleKeepUserConnected()}
            />
            <Text style={styles.checkboxText}>Mantenha-me conectado</Text>
          </View>
        </View>
        <Button onPress={onUserEnterClick} disabled={!userEmail || !userPass}>
          ENTRAR
        </Button>
      </View>
    </SafeAreaView>
  );
}
