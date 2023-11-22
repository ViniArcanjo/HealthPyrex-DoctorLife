import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../atoms/Text";

import { AppColors } from "../../../../src/config/colors";

const Exam = ({ title, date }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title} bold>
          {title}
        </Text>
        <MaterialCommunityIcons
          name="clipboard-pulse"
          size={24}
          color={AppColors.primary}
        />
      </View>
      <Text style={styles.date} bold>
        Realizar até dia{" "}
        <Text style={styles.dateStyle} bold>
          {date}
        </Text>
      </Text>
    </View>
  );
};

export default Exam;
