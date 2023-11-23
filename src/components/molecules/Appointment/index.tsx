import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../atoms/Text";
import { AppColors } from "../../../../src/config/colors";

const Appointment = ({ appointment, doctor, date }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.appointment} bold>
            {appointment}
          </Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={AppColors.primary}
          />
        </View>
        <Text style={styles.doctor}>
          <Text bold>Doutor: </Text>
          {doctor}
        </Text>

        <View>
          <Text style={styles.date} bold>
            Data: {date.substring(0, 10)}
            <Text style={styles.hours} bold>
              {" "}
              {date.substring(11, 16)}hs
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
