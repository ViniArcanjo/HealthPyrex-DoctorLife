import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColors.neutral_400,
  },
  title: {
    fontSize: 16,
    color: AppColors.neutral_600,
  },
  description: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
});
