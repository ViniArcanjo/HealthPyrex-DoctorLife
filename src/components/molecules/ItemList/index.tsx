import { styles } from "./styles";
import { View } from "react-native";

import Text from "../../atoms/Text";

const ItemList = ({ exame, doctor, date }) => {
  return (
    <View>
      <Text style={styles.exame} bold>
        {exame}
      </Text>
      <Text style={styles.contentDoctor}>
        {doctor} · Realizar até dia <Text bold>{date}</Text>
      </Text>
    </View>
  );
};

export default ItemList;
