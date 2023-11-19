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
    paddingVertical: 14,
  },
});
