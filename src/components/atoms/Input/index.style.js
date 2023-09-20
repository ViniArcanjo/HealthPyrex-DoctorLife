import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 16,
  },
  input: {
    width: "100%",
    padding: 16,
    paddingLeft: 20,
    borderWidth: 0,
    borderColor: "transparent",
    fontFamily: "Montserrat_700Bold",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    width: "100%",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: AppColors.light,
  },
  text: {
    color: AppColors.dark,
    fontSize: 24,
    fontWeight: "bold",
  },
  wrapper: {
    alignItems: "flex-start",
    gap: 6,
  },
});
