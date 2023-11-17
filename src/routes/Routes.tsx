import { useContext, useEffect, useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthContext } from "../context/auth.context";
import { LoginPage } from "../pages/LoginPage";

import Home from "../components/pages/Home";
import More from "../components/organisms/More";
import Care from "../components/molecules/Care";
import Exams from "../components/organisms/Exams";
import Footer from "../components/organisms/Footer";
import Patients from "../components/organisms/Patients";
import Appointments from "../components/organisms/Appointments";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { user, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email && user?.password) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exams" component={Exams} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Care" component={Care} />
        <Stack.Screen name="Patients" component={Patients} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
      {isLoggedIn && <Footer />}
    </>
  );
}
