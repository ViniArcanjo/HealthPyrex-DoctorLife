import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { AppColors } from "./src/config/colors";

import Appointments from "./src/components/pages/Appointments";
import Home from "./src/components/pages/Home";
import Exams from "./src/components/pages/Exams";
import More from "./src/components/pages/More";

import Footer from "./src/components/organisms/Footer";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.base}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Appointments"
            component={Appointments}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Exams"
            component={Exams}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{
              headerShown: false,
              backgroundColor: AppColors.white_100,
            }}
          />
        </Stack.Navigator>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_100,
    fontFamily: "Montserrat_400Regular",
    paddingTop: 48,
  },
});
