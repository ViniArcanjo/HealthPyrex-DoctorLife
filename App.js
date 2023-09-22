import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { AppColors } from './src/config/colors'

import AuthProvider from './src/context/auth.context'
import Routes from './src/routes/Routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={styles.base}>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </SafeAreaView>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_200,
    paddingTop: 48
  }
})
