import { useContext, useState } from 'react'
import { Text, View, SafeAreaView, Alert, Switch } from 'react-native'
import Checkbox from 'expo-checkbox'

import { AuthContext } from '../../context/auth.context'
import { Input } from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import { styles } from './LoginPage.style'
import { AppColors } from '../../config/colors'

export function LoginPage({ navigation }) {
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

  function handleLoginPress() {
    if (user.email) {
      navigation.navigate('Home')

      return
    }

    Alert.alert('Digite seu email e senha!')
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.switchContainer}>
        <Text>Paciente</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: AppColors.dark, true: AppColors.primary }}
          onValueChange={toggleSwitch}
          value={isDoctor}
        />
        <Text>Médico</Text>
      </View>
      <View style={styles.loginFormContainer}>
        <Input
          onChange={onInputChange}
          label={'Login'}
          placeholder={'Digite aqui seu email'}
          type={'email-address'}
        />
        <View style={styles.passwordInputContainer}>
          <Input
            onChange={onInputChange}
            label={'Senha'}
            placeholder={'Digite aqui sua senha'}
            type={'password'}
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
        <Button
          title={'ENTRAR'}
          onPress={handleLoginPress}
          disabled={!user.email}
        />
      </View>
    </SafeAreaView>
  )
}
