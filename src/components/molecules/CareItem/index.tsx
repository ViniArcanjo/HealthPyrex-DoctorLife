import { styles } from "./styles";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppColors } from "../../../../src/config/colors";
import Text from "../../atoms/Text";

import {
  getFormatDateDescriptionMonth,
  getHoursDate,
} from "../../../../src/utils/utils";

const CareItem = ({ care, patient, date }) => {
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
          <Text style={styles.care} bold>
            {care}
          </Text>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={AppColors.primary}
          />
        </View>
        <Text style={styles.patient}>
          <Text bold>Doutor: </Text>
          {patient}
        </Text>

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

export default CareItem;
