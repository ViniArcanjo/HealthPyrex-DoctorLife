import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    backgroundColor: AppColors.neutral_400,
    padding: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});