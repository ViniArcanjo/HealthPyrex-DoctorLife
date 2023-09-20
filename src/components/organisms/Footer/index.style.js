import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 80,
    paddingTop: 8,
    borderTopColor: AppColors.neutral_600,
    borderTopWidth: 0.2,
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
