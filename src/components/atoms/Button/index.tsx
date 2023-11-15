import { styles } from "./styles";
import { Pressable, Text } from "react-native";

const Button = ({ disabled = false, onPress, children }) => {
  return (
    <Pressable
      style={disabled ? styles.disabled : styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
