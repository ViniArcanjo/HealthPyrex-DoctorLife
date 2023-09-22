import { styles } from "./index.style";
import { View } from "react-native";

import Text from "../../atoms/Text";

const ItemList = ({ exame, doctor, date }) => {
  return (
    <View>
      <Text style={styles.exame} bold>
        {exame}
      </Text>
      <Text style={styles.contentDoctor}>
        {doctor} · Realizar até dia {date}
      </Text>
    </View>
  );
};

export default ItemList;
