import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  KeyboardTypeOptions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { AppColors } from "../../../config/colors";

import Text from "../Text";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: KeyboardTypeOptions | "password" | "search" | undefined;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}
export function Input({
  label,
  placeholder,
  type = "default",
  onChange,
  onSearch,
}: InputProps) {
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
      onSearch;
    }
  }, [value]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text} bold>
        {label}
      </Text>
      {type == "password" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? "Digite aqui..."}
            secureTextEntry={!showPassword}
            value={value}
            onChangeText={onChange}
            underlineColorAndroid="transparent"
          />
          <TouchableWithoutFeedback onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={AppColors.dark_700}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
      {type == "search" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder={placeholder ?? "Digite aqui..."}
            value={value}
            onChangeText={() => setValue}
            onSubmitEditing={handleSearch}
            underlineColorAndroid="transparent"
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
      {type != "search" && type != "password" && (
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType={type}
            style={[styles.input]}
            placeholder={placeholder ?? "Digite aqui..."}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={handleSearch}
            underlineColorAndroid="transparent"
          />
        </View>
      )}
    </View>
  );
}
