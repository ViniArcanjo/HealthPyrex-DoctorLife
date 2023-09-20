import { FlatList, StyleSheet, Alert, View } from "react-native";

import Footer from "./src/components/organisms/Footer/footer";
import ItemList from "./src/components/molecules/ItemList/itemList";

import { AppColors } from "./src/config/colors";
import { Input } from "./src/components/atoms/Input/Input";
import { useEffect, useState } from "react";

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
  {
    key: "6",
    exame: "TSH",
    doctor: "Maria Eliza",
    date: "04/09/2023",
  },
  {
    key: "7",
    exame: "TSH",
    doctor: "Maria Eliza",
    date: "04/09/2023",
  },
  {
    key: "8",
    exame: "TSH",
    doctor: "Maria Eliza",
    date: "04/09/2023",
  },
  {
    key: "9",
    exame: "TSH",
    doctor: "Maria Eliza",
    date: "04/09/2023",
  },
  {
    key: "10",
    exame: "TSH",
    doctor: "Maria Eliza",
    date: "04/09/2023",
  },
];

export default function App() {
  const [profilesList, setProfilesList] = useState(profiles);

  const onSearch = (value) => {
    setProfilesList(profiles);

    if (value) {
      const newList = profiles.filter(
        (q) =>
          q.exame.toLocaleUpperCase().includes(value?.toLocaleUpperCase()) ||
          q.doctor.toLocaleUpperCase().includes(value?.toLocaleUpperCase())
      );

      setProfilesList(newList);
    }
  };

  return (
    <View style={styles.base}>
      <View style={{ flex: 1, paddingHorizontal: 32 }}>
        <Input placeholder="Buscar" onSearch={(value) => onSearch(value)} />

        <FlatList
          data={profilesList}
          renderItem={({ item }) => (
            <View style={styles.itemContent}>
              <ItemList
                exame={item.exame}
                doctor={item.doctor}
                date={item.date}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
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
    paddingTop: 32,
  },
  itemContent: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomWidth: 0.2,
    borderBottomColor: AppColors.neutral_400,
  },
});
