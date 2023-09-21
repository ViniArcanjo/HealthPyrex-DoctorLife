import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 32,
    backgroundColor: AppColors.white_100,
  },
  itemContent: {
    paddingVertical: 16,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColors.neutral_500,
  },
});
