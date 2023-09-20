import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 64,
    borderTopColor: AppColors.neutral_600,
    borderTopWidth: 0.5,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageAppointment: {
    width: 32,
    height: 32,
  },
});
