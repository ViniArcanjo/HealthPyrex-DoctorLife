import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "../../atoms/Text";

import { AppColors } from "../../../../src/config/colors";
import {
  getFormatDateDescriptionMonth,
  getHoursDate,
} from "../../../../src/utils/utils";

const Appointment = ({ appointment, doctor, date, description }) => {
  return (
    <View>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

        <Text style={styles.description}>{description}</Text>

        <View>
          <Text style={styles.date} bold>
            {getFormatDateDescriptionMonth(date)}
            <Text style={styles.hours} bold>
              {" "}
              {getHoursDate(date)}hs
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Appointment;
