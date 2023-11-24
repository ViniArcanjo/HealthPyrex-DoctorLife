import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";
import {
  getFormatDateDescriptionMonth,
  getHoursDate,
} from "../../../../src/utils/utils";

const Patient = ({ patient, lastAppointment, age }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title} bold>
        {patient}
      </Text>
      <Text style={styles.lastAppointment}>
        Última consulta:{" "}
        <Text bold>{getFormatDateDescriptionMonth(lastAppointment)}</Text> às{" "}
        {getHoursDate(lastAppointment)}
      </Text>
    </View>
  );
};

export default Patient;
