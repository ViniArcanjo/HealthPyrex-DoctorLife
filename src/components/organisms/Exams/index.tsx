import { styles } from "./styles";

import { useState } from "react";
import { FlatList, View } from "react-native";

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
        placeholder="Buscar"
        onSearch={onSearch}
        type="search"
        itens={examsList}
        props={["exame", "doctor"]}
      />

      <FlatList
        data={examsList}
        renderItem={({ item }) => (
          <Exam
            key={item.key}
            title={item.exame}
            person={item.doctor}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Exams;
