import { styles } from "./styles";

import { useState } from "react";
import { View, FlatList } from "react-native";

import Input from "../../../components/atoms/Input";
import Container from "../../../components/atoms/Container";
import CareItem from "../../../components/molecules/CareItem";

const care = [
  {
    key: "1",
    patient: "Frank Gualberto",
    date: "01/11/2023 08:00",
  },
  {
    key: "2",
    patient: "Neli Knupp",
    date: "05/10/2023 17:00",
  },
  {
    key: "3",
    patient: "Iára Linhares",
    date: "19/11/2023 11:00",
  },
];

const Care = () => {
  const [careList, setCareList] = useState(care);

  const onSearch = (value) => {
    setCareList(value);
  };

  return (
    <Container>
      <Input
        placeholder="Buscar"
        onSearch={onSearch}
        type="search"
        itens={careList}
        props={["patient"]}
      />

      <FlatList
        data={careList}
        renderItem={({ item }) => (
          <View style={styles.itemContent}>
            <CareItem key={item.key} patient={item.patient} date={item.date} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Care;
