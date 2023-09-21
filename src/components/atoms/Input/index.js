import { useEffect, useState } from 'react'
import { TextInput, View, Text, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './index.style'
import { AppColors } from '../../../config/colors'

export function Input({
  label,
  placeholder,
  onChange = () => {},
  onSearch = () => {},
  type = 'default'
}) {
  const [value, setValue] = useState()
  const [showPassword, setShowPassword] = useState(false)

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  function handleSearch() {
    onSearch(value)
  }

  useEffect(() => {
    if (!value) {
      onSearch()
    }
  }, [value])

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{label}</Text>
      {type == 'password' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? 'Digite aqui...'}
            secureTextEntry={!showPassword}
            value={value}
            onChangeText={onChange}
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color={AppColors.light}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
      {type == 'search' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? 'Digite aqui...'}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSearch}
          />
          <TouchableWithoutFeedback onPress={handleSearch}>
            <MaterialCommunityIcons
              name="magnify"
              size={24}
              color={AppColors.neutral_500}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
      {type != 'search' && type != 'password' && (
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={type}
            style={[styles.input]}
            placeholder={placeholder ?? 'Digite aqui...'}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={handleSearch}
          />
        </View>
      )}
    </View>
  )
}
