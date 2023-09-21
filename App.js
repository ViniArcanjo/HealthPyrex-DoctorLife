import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/context/auth.context'
import Routes from './src/routes/Routes'
import { StyleSheet, View } from 'react-native'

import { AppColors } from './src/config/colors'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <View style={styles.base}>
          <StatusBar barStyle="dark-content" />
          <Routes />
        </View>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_100,
    paddingTop: 48
  }
})
