import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    gap: 8,
  },
  date: {
    fontSize: 12,
    paddingBottom: 4,
  },
  hours: {
    fontSize: 12,
    color: AppColors.error,
    lineHeight: 0,
  },
  card: {
    flex: 1,
    gap: 4,
    padding: 8,
    borderWidth: 0.2,
    borderRadius: 6,
    borderColor: AppColors.primary,
    backgroundColor: AppColors.primary,
  },
  appointment: {
    fontSize: 16,
    color: AppColors.white_100,
  },
  doctor: {
    fontSize: 14,
    color: AppColors.white_100,
  },
});
