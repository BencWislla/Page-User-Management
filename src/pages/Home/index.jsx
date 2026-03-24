import { ListOfCards } from "../../components/ListOfCards";
import { ListOfUsers } from "../../components/ListOfUsers";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <div>
        <ListOfCards />
      </div>
      <div>
        <ListOfUsers />
      </div>
    </Container>
  );
}
export default Home;
