import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderTopWidth: 0.2,
    borderColor: AppColors.primary,
  },
  card: {
    flex: 1,
    gap: 4,
    padding: 8,
    borderWidth: 0.2,
    borderTopStartRadius: 0,
    borderRadius: 6,
    borderColor: AppColors.primary,
    backgroundColor: AppColors.primary,
  },
  date: {
    fontSize: 12,
    paddingBottom: 4,
  },
  appointment: {
    fontSize: 16,
    color: AppColors.white_100,
  },
  doctor: {
    fontSize: 14,
    color: AppColors.white_100,
  },
  hours: {
    fontSize: 12,
    color: AppColors.dark_800,
  },
});
