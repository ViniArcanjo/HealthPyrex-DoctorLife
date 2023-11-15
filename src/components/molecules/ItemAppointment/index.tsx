import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";

const ItemAppointment = ({ appointment, doctor, date }) => {
  return (
    <View>
      <Text style={styles.date} bold>
        {date.substring(0, 10)}
      </Text>
      <View style={styles.content}>
        <Text style={styles.hours} bold>
          {date.substring(11, 16)}hs
        </Text>
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
    </View>
  );
};

export default ItemAppointment;
