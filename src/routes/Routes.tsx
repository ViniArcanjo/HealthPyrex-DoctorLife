import { useContext, useEffect, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { AuthContext } from '../context/auth.context'
import { LoginPage } from '../pages/LoginPage'
import Home from '../components/pages/Home'
import Appointments from '../components/pages/Appointments'
import Exams from '../components/pages/Exams'
import More from '../components/pages/More'
import Footer from '../components/organisms/Footer'

const Stack = createNativeStackNavigator()

export default function Routes() {
  const { user } = useContext(AuthContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (user?.email && user?.password) {
      setIsLoggedIn(true)
    }
  }, [user])

  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Appointments" component={Appointments} />
        <Stack.Screen name="Exams" component={Exams} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
      {isLoggedIn && <Footer />}
    </>
  )
}
