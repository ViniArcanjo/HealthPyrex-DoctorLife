import { styles } from "./styles";
import { Pressable, Text } from "react-native";

const Button = ({
  type = "default",
  onPress,
  padding = 8,
  children,
  ...props
}) => {
  const style = {
    default: styles.default,
    full: styles.full,
    // primary: styles.primary,
    // ghost: styles.blacked,
    // dashed: styles.dashed,
    // link: styles.link,
    text: styles.text,
    disabled: styles.disabled,
  };

  const classButton = style[type];

  return (
    <Pressable
      style={
        props.disabled ? styles.disabled : [classButton, { padding: padding }]
      }
      onPress={onPress}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
