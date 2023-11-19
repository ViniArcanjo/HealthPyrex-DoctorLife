import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";

const Patient = ({ patient, date, hours }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title} bold>
        {patient}
      </Text>
      <Text style={styles.description}>
        Última consulta: <Text bold>{date}</Text> às {hours}
      </Text>
    </View>
  );
};

export default Patient;
