import { styles } from "./styles";

import { useState } from "react";
import { View, ScrollView } from "react-native";

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
        placeholder="Pesquisar pacientes"
        onSearch={onSearch}
        type="search"
        itens={careList}
        props={["patient"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {careList.map((item) => (
          <View
            style={styles.itemContent}
            onStartShouldSetResponder={() => true}
          >
            <CareItem key={item.key} patient={item.patient} date={item.date} />
          </View>
        ))}
        showsVerticalScrollIndicator={false}
      </ScrollView>
    </Container>
  );
};

export default Care;
