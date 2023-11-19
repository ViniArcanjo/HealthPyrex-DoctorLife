import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../context/auth.context";
import { LoginPage } from "../pages/LoginPage";

import Home from "../components/pages/Home";
import More from "../components/organisms/More";
import Care from "../components/organisms/Care";
import Exams from "../components/organisms/Exams";
import Footer from "../components/organisms/Footer";
import Patients from "../components/organisms/Patients";
import Appointments from "../components/organisms/Appointments";
import { AppColors } from "../config/colors";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email && user?.password) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const options = (title: string) => {
    return {
      title: title,
      headerStyle: { backgroundColor: AppColors.primary },
      headerTintColor: AppColors.white_100,
      headerShown: true,
      headerBackVisible: false,
      headerTitleStyle: {
        fontFamily: "Montserrat_700Bold",
      },
    };
  };

  return (
    <>
      <View style={styles.appBar} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Exams"
          component={Exams}
          options={options("Meus exames")}
        />
        <Stack.Screen
          name="Appointments"
          component={Appointments}
          options={options("Minhas consultas")}
        />
        <Stack.Screen
          name="Care"
          component={Care}
          options={options("Meus atendimentos")}
        />
        <Stack.Screen
          name="Patients"
          component={Patients}
          options={options("Meus pacientes")}
        />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
      {isLoggedIn && <Footer />}
    </>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: AppColors.primary,
    height: 48,
  },
});
