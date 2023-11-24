import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    paddingBottom: 4,
    color: AppColors.neutral_600,
  },
  hours: {
    fontSize: 12,
    color: AppColors.error,
    lineHeight: 0,
  },
  card: {
    flex: 1,
    gap: 8,
    padding: 8,
    backgroundColor: AppColors.white_100,

    borderColor: AppColors.neutral_400,
    borderWidth: 0.2,
    borderRadius: 6,
  },
  care: {
    fontSize: 16,
    color: AppColors.dark_700,
  },
  patient: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
});
