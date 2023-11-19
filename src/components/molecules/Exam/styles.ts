import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: AppColors.neutral_400,
    borderBottomWidth: 0.2,
    borderRadius: 6,
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
