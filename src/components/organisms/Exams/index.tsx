import { styles } from "./styles";

import { useState } from "react";
import { ScrollView, View } from "react-native";

import Input from "../../atoms/Input";
import Exam from "../../molecules/Exam";
import Container from "../../../components/atoms/Container";

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
    setExamsList(value);
  };

  return (
    <Container>
      <Input
        placeholder="Pesquisar médicos, exames"
        onSearch={onSearch}
        type="search"
        itens={examsList}
        props={["exame", "doctor"]}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {examsList.map((item) => (
          <View
            style={{ paddingTop: 14 }}
            key={item.key}
            onStartShouldSetResponder={() => true}
          >
            <Exam title={item.exame} date={item.date} />
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Exams;
