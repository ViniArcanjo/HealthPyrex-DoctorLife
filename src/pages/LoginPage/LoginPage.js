import { useContext, useState } from 'react'
import { Text, View, SafeAreaView, Alert } from 'react-native'
// import CheckBox from '@react-native-community/checkbox'

import { AuthContext } from '../../context/auth.context'
import { Input } from '../../components/atoms/Input/Input'
import { styles } from './LoginPage.style'

export function LoginPage() {
  const { user, setKeepConnected, SignIn } = useContext(AuthContext)
  const [keepUserConnected, setKeepUserConnected] = useState(false)

  function onInputChange(email) {
    SignIn(email)
  }

  function handleKeepUserConnected() {
    setKeepUserConnected(!keepUserConnected)
    setKeepConnected(keepUserConnected)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Input
        onInputChange={onInputChange}
        label={'Login'}
        placeholder={'Digite aqui seu email'}
        type={'email-address'}
      />
      <View style={styles.passwordInputContainer}>
        <Input
          onInputChange={onInputChange}
          label={'Senha'}
          placeholder={'Digite aqui sua senha'}
          type={'email-address'}
        />
        <Text
          style={styles.text}
          onPress={() =>
            Alert.alert('Redirecionando para redefinição de senha...')
          }
        >
          Esqueci minha senha
        </Text>
        {/* <View style={styles.keepConnectedContainer}>
          <CheckBox
            value={keepUserConnected}
            onValueChange={value => handleKeepUserConnected(value)}
          />
          <Text>Mantenha-me conectado</Text>
        </View> */}
      </View>
    </SafeAreaView>
  )
}
