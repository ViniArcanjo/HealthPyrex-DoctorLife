import { useContext, useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'

import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/context/auth.context'
import { AuthContext } from './src/context/auth.context'
import Routes from './src/routes/Routes'
import { StyleSheet, View } from 'react-native'

import { AppColors } from './src/config/colors'

import Footer from './src/components/organisms/Footer'

export default function App() {
  const { user } = useContext(AuthContext)

  return (
    <NavigationContainer>
      <AuthProvider>
        <View style={styles.base}>
          <StatusBar barStyle="dark-content" />
          <Routes />
          {user?.email && <Footer />}
        </View>
      </AuthProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_100,
    // fontFamily: "Montserrat-Regular",
    paddingTop: 48
  }
})
