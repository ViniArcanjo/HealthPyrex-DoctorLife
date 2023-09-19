import { useState } from 'react'
import { TextInput, View, Text, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './Input.style'
import { AppColors } from '../../../config/colors'

export function Input({ label, placeholder, type }) {
  const [value, setValue] = useState()
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { width: type == 'visible-password' ? 220 : 256 }
          ]}
          keyboardType={type}
          placeholder={placeholder ?? 'Digite aqui...'}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={setValue}
        />
        {type == 'visible-password' && (
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color={AppColors.light}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  )
}
