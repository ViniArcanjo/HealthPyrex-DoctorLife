import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";

const ExamItem = ({ title, person, date }) => {
  return (
    <View>
      <Text style={styles.title} bold>
        {title}
      </Text>
      <Text style={styles.description}>
        {person} · Realizar até dia <Text bold>{date}</Text>
      </Text>
    </View>
  );
};

export default ExamItem;
