import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 48,
  },
  leave: {
    fontSize: 20,
    color: AppColors.error,
  },
});
