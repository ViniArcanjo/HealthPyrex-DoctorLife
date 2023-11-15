import { TextProps } from "@rneui/base";
import { Text as RNText, StyleSheet } from "react-native";

interface TextData extends TextProps {
  bold?: boolean;
}

const Text = ({ bold, ...props }: TextData) => {
  return (
    <RNText
      {...props}
      style={[props.style, bold ? styles.font700 : styles.font400]}
    />
  );
};

const styles = StyleSheet.create({
  font400: {
    fontFamily: "Montserrat_400Regular",
  },
  font700: {
    fontFamily: "Montserrat_700Bold",
  },
});

export default Text;
