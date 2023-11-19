import { View } from "react-native";
import { AppColors } from "../../../config/colors";

const Container = ({
  gap = 16,
  backgroundColor = AppColors.white_100,
  paddingHorizontal = 32,
  paddingVertical = 8,
  children,
  ...props
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        gap: gap,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {children}
    </View>
  );
};

export default Container;
