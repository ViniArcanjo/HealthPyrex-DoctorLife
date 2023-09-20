import { useEffect, useState } from "react";
import { TextInput, View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./index.style";
import { AppColors } from "../../../config/colors";
import Text from "../Text";

export function Input({ label, placeholder, onSearch, type = "default" }) {
  const [value, setValue] = useState();
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSearch() {
    onSearch(value);
  }

  useEffect(() => {
    if (!value) {
      onSearch();
    }
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{label}</Text>
      {type == "password" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? "Digite aqui..."}
            secureTextEntry={!showPassword}
            value={value}
            onChangeText={setValue}
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={AppColors.light}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
      {type == "default" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? "Digite aqui..."}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSearch}
          />
          <TouchableWithoutFeedback onPress={handleSearch}>
            <MaterialCommunityIcons
              name="magnify"
              size={24}
              color={AppColors.neutral_500}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}
