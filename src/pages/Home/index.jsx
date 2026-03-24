import { ListOfCards } from "../../components/ListOfCards";
import { ListOfUsers } from "../../components/ListOfUsers";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <ListOfCards />

      <ListOfUsers />
    </Container>
  );
}
export default Home;
