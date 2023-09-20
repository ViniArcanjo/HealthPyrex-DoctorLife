import { styles } from "./itemList.style";
import { Text, View } from "react-native";

const ItemList = ({ exame, doctor, date }) => {
  return (
    <View>
      <Text style={styles.exame}>{exame}</Text>
      <Text style={styles.contentDoctor}>
        {doctor} · Realizar até dia {date}
      </Text>
    </View>
  );
};

export default ItemList;
