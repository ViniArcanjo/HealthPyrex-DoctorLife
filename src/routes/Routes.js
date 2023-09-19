import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginPage } from '../pages/LoginPage/LoginPage'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  )
}
