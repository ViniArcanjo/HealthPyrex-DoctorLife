import { Keyboard, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { AppColors } from "./src/config/colors";

import AuthProvider from "./src/context/auth.context";
import Routes from "./src/routes/Routes";

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
      <AuthProvider>
        <View style={styles.base} onTouchStart={() => Keyboard.dismiss()}>
          <StatusBar style="dark" backgroundColor={AppColors.white_100} />
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_200,
    paddingTop: 48,
  },
});
