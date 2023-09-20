import { styles } from "./index.style";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { AppColors } from "../../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color={AppColors.dark}
        />
        <Text>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Appointments")}
      >
        {/* <Image
          style={AppColors.dark}
          source={require("../../../../assets/appointment.png")}
        /> */}
        <MaterialCommunityIcons
          name="medical-bag"
          size={24}
          color={AppColors.dark}
        />
        <Text>Consultas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("Exams")}
      >
        <MaterialCommunityIcons
          name="heart-pulse"
          size={24}
          color={AppColors.dark}
        />
        <Text>Exames</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("More")}
      >
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color={AppColors.dark}
        />
        <Text>Mais</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
