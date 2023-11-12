import { styles } from './index.style'
import { Pressable, Text } from 'react-native'

const Button = ({ title, disabled = false, onPress }) => {
  return (
    <Pressable
      style={disabled ? styles.disabled : styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button
