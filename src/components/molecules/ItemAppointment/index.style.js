import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  card: {
    flex: 1,
    gap: 4,
    padding: 8,
    borderWidth: 0.2,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 0,
    backgroundColor: AppColors.neutral_300,
  },
  date: {
    fontSize: 12,
    borderBottomWidth: 0.2,
    padding: 4,
  },
  appointment: {
    fontSize: 16,
    color: AppColors.dark,
  },
  doctor: {
    fontSize: 14,
    color: AppColors.neutral_600,
  },
  hours: {
    fontSize: 12,
    color: AppColors.neutral_600,
  },
});
