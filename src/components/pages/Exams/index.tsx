import { styles } from "./index.style";

import { useState } from "react";
import { FlatList, View } from "react-native";

import { Input } from "../../atoms/Input";
import ItemList from "../../molecules/ItemList";

const exams = [
  {
    key: "1",
    exame: "TSH",
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
];

const Exams = () => {
  const [examsList, setExamsList] = useState(exams);

  const onSearch = (value) => {
    setExamsList(exams);

    if (value) {
      const newList = exams.filter(
        (q) =>
          q.exame.toLocaleUpperCase().includes(value?.toLocaleUpperCase()) ||
          q.doctor.toLocaleUpperCase().includes(value?.toLocaleUpperCase())
      );

      setExamsList(newList);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Buscar"
        onSearch={(value) => onSearch(value)}
        type="search"
      />

      <FlatList
        data={examsList}
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
  );
};

export default Exams;
