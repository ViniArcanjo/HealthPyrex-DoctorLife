import { Text as RNText, StyleSheet } from "react-native";

const Text = (props) => {
  return (
    <RNText
      {...props}
      style={[props.style, props.bold ? styles.font700 : styles.font400]}
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
