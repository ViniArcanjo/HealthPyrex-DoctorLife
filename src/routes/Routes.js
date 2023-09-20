import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginPage } from '../pages/LoginPage/LoginPage'
import Home from '../components/pages/Home'
import Appointments from '../components/pages/Appointments'
import Exams from '../components/pages/Exams'
import More from '../components/pages/More'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
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
  )
}
