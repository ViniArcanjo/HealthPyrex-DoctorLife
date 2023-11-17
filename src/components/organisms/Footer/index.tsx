import { styles } from "./styles";

import { useState, useContext, useEffect } from "react";
import { TouchableOpacity, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppColors } from "../../../config/colors";
import Text from "../../atoms/Text";
import { AuthContext } from "../../../../src/context/auth.context";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const [value, setValue] = useState("");

  const onPressNavigate = (value: string) => {
    setValue(value);
    navigate(value);
  };

  console.log(user);

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressNavigate("Home")}
      >
        <MaterialCommunityIcons
          name="home-variant"
          size={32}
          color={AppColors.dark_800}
        />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>

      {user.role === "patient" ? (
        <>
          <TouchableOpacity
            style={styles.item}
            onPress={() => onPressNavigate("Appointments")}
          >
            <MaterialCommunityIcons
              name="medical-bag"
              size={32}
              color={AppColors.dark_800}
            />
            <Text style={styles.text}>Consultas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => onPressNavigate("Exams")}
          >
            <MaterialCommunityIcons
              name="heart-pulse"
              size={32}
              color={AppColors.dark_800}
            />
            <Text style={styles.text}>Exames</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.item}
            onPress={() => onPressNavigate("Patients")}
          >
            <MaterialCommunityIcons
              name="account-multiple"
              size={32}
              color={AppColors.dark_800}
            />
            <Text style={styles.text}>Pacientes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => onPressNavigate("Care")}
          >
            <MaterialCommunityIcons
              name="heart-flash"
              size={32}
              color={AppColors.dark_800}
            />
            <Text style={{ fontSize: 10, paddingTop: 2 }}>Atendimentos</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressNavigate("More")}
      >
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={32}
          color={AppColors.dark_800}
        />
        <Text style={styles.text}>Mais</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
