import { styles } from "./styles";

import { useState } from "react";
import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  KeyboardTypeOptions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AppColors } from "../../../config/colors";

import Text from "../Text";

interface InputProps {
  label?: string;
  placeholder: string;
  type?: KeyboardTypeOptions | "password" | "search" | undefined;
  onChange?: (value: string) => void;
  onSearch?: (any) => void;
  itens?: any[];
  props?: string[];
}

const Input = ({
  label,
  placeholder,
  type = "default",
  onChange,
  onSearch,
  itens,
  props,
}: InputProps) => {
  const [inital, setInitial] = useState(itens);
  const [value, setValue] = useState<string>();
  const [showPassword, setShowPassword] = useState(false);

  const handleSearch = () => {
    onSearch(inital);

    var values;

    if (value) {
      const newList = itens.filter((q) =>
        props.find((field) =>
          q[field].toLocaleUpperCase().includes(value?.toLocaleUpperCase())
        )
      );

      console.log(newList);

      onSearch(newList);
    }
  };

  const handleChange = (value) => {
    setValue(value);

    !value && onSearch(inital);
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

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
            autoCorrect={false}
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
            onChangeText={handleChange}
            onSubmitEditing={handleSearch}
            underlineColorAndroid="transparent"
            autoCorrect={false}
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
            autoCorrect={false}
          />
        </View>
      )}
    </View>
  );
};

export default Input;
