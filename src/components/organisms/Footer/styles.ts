import { StyleSheet } from "react-native";
import { AppColors } from "../../../config/colors";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 80,
    backgroundColor: AppColors.white_100,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
  imageAppointment: {
    width: 32,
    height: 32,
  },
  text: {
    fontSize: 12,
  },
});
