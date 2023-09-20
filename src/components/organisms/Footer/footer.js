import { Image, Text, View } from "react-native";

import { styles } from "./footer.style";
import { AppColors } from "../../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.item}>
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color={AppColors.dark}
        />
        <Text>Inicio</Text>
      </View>

      <View style={styles.item}>
        <Image
          style={AppColors.dark}
          source={require("../../../../assets/appointment.png")}
        />
        <Text>Consultas</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="heart-pulse"
          size={24}
          color={AppColors.dark}
        />
        <Text>Exames</Text>
      </View>

      <View style={styles.item}>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color={AppColors.dark}
        />
        <Text>Mais</Text>
      </View>
    </View>
  );
};

export default Footer;
