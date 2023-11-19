import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";
const CareItem = ({ patient, date }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.date} bold>
        {date.substring(0, 10)}
      </Text>
      <View style={styles.card}>
        <Text style={styles.hours}>{date.substring(11, 16)}hs</Text>
        <Text style={styles.patient}>
          <Text bold>Paciente: </Text>
          {patient}
        </Text>
      </View>
    </View>
  );
};

export default CareItem;
