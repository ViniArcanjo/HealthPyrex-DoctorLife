import { styles } from "./styles";

import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../components/atoms/Button";
import Container from "../../../components/atoms/Container";
import { AuthContext } from "../../../../src/context/auth.context";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { navigate } = useNavigation<any>();

  const onNavigate = () => {
    navigate("");
  };

  return (
    <Container paddingVertical={48}>
      {user.role === "patient" && (
        <Button onPress={() => {}} type="full">
          Agendar consulta
        </Button>
      )}
    </Container>
  );
};

export default Home;
