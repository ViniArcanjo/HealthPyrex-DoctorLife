import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";

const Appointment = ({ appointment, doctor, date }) => {
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.date} bold>
          {date.substring(0, 10)}
        </Text>
        <Text style={styles.hours} bold>
          {date.substring(11, 16)}hs
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.appointment} bold>
          {appointment}
        </Text>
        <Text style={styles.doctor}>
          <Text bold>Doutor: </Text>
          {doctor}
        </Text>
      </View>
    </View>
  );
};

export default Appointment;
