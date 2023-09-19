import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/context/auth.context'
import Routes from './src/routes/Routes'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
