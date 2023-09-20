import { useContext, useState } from 'react'
import { Text, View, SafeAreaView, Alert, Switch } from 'react-native'
import Checkbox from 'expo-checkbox'

import { AuthContext } from '../../context/auth.context'
import { Input } from '../../components/atoms/Input/Input'
import { styles } from './LoginPage.style'
import { AppColors } from '../../config/colors'

export function LoginPage() {
  const { user, setKeepConnected, SignIn } = useContext(AuthContext)

  const [keepUserConnected, setKeepUserConnected] = useState(false)
  const [isDoctor, setIsDoctor] = useState(false)

  function onInputChange(email) {
    SignIn(email)
  }

  function handleKeepUserConnected() {
    setKeepUserConnected(!keepUserConnected)
    setKeepConnected(keepUserConnected)
  }

  function toggleSwitch() {
    setIsDoctor(!isDoctor)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Switch
          style={styles.switch}
          trackColor={{ false: AppColors.dark, true: AppColors.light }}
          ios_backgroundColor={AppColors.dark}
          onValueChange={toggleSwitch}
          value={isDoctor}
        />
      </View>
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
          type={'visible-password'}
        />
        <Text
          style={styles.passwordText}
          onPress={() =>
            Alert.alert('Redirecionando para redefinição de senha...')
          }
        >
          Esqueci minha senha
        </Text>
        <View style={styles.keepConnectedContainer}>
          <Checkbox
            style={styles.checkbox}
            value={keepUserConnected}
            onValueChange={value => handleKeepUserConnected(value)}
          />
          <Text style={styles.checkboxText}>Mantenha-me conectado</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
