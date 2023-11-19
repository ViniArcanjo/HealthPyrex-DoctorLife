import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  date: {
    width: 75,
    fontSize: 12,
    paddingBottom: 4,
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
  hours: {
    fontSize: 12,
    color: AppColors.white_100,
  },
  patient: {
    fontSize: 14,
    color: AppColors.white_100,
  },
});
