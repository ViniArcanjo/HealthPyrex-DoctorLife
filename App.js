import { FlatList, StyleSheet, Alert, View } from "react-native";

import { AppColors } from "./src/config/colors";
import Footer from "./src/components/organisms/Footer/footer";
import ItemList from "./src/components/molecules/ItemList/itemList";

import Button from "./src/components/atoms/Button/button";

export default function App() {
  const profiles = [
    {
      key: "1",
      exame: "Oftalmológista",
      doctor: "Frank Gualberto",
      date: "01/11/2023",
    },
    {
      key: "2",
      exame: "Hemograma",
      doctor: "Neli Knupp",
      date: "05/10/2023",
    },
    {
      key: "3",
      exame: "Exame de urina",
      doctor: "Iára Linhares",
      date: "19/11/2023",
    },
    {
      key: "4",
      exame: "Exame de glicemia",
      doctor: "Adso da Souza",
      date: "22/11/2023",
    },
    {
      key: "5",
      exame: "TSH",
      doctor: "Maria Eliza",
      date: "04/09/2023",
    },
  ];

  const handleOnPress = () => {
    Alert.alert("Adicionar funcionalidade!");
  };

  return (
    <View style={styles.base}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <Button title="EXEMPLO BUTTON" onPress={handleOnPress} />

        <FlatList
          data={profiles}
          renderItem={({ item }) => (
            <View style={styles.itemContent}>
              <ItemList
                exame={item.exame}
                doctor={item.doctor}
                date={item.date}
              />
            </View>
          )}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: AppColors.white_110,
    // fontFamily: "Montserrat-Regular",
    paddingTop: 48,
  },
  itemContent: {
    padding: 18,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColors.neutral_400,
  },
});
