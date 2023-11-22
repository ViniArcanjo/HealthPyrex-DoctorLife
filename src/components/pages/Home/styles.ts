import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 999,
  },
  infos: {
    display: "flex",
    gap: 16,
    padding: 32,
    backgroundColor: AppColors.primary,
  },
  text: {
    color: AppColors.white_100,
  },
  item: {
    gap: 12,
    color: AppColors.primary,
  },
});
