import { useLocation } from "react-router-dom";
import { Alert } from "antd";
import { ListOfCards } from "../../components/ListOfCards";
import { ListOfUsers } from "../../components/ListOfUsers";
import { Container } from "./styles";

function Home() {
  const location = useLocation();

  return (
    <Container>
      {location.state && location.state.alertSuccess && (
        <Alert
          type="success"
          title="Usuário criado com sucesso!"
          description="O novo usuário foi adicionado ao sistema."
          banner
          closable
          styles={{
            title: {
              fontSize: "12px",
              color: "#14532D",
              fontWeight: "600",
              margin: "0px",
            },
            icon: { fontSize: "24px", color: "#22C55E", alignSelf: "center" },
            description: {
              fontSize: "10px",
              color: "#15803D",
              fontWeight: "400",
            },
            root: {
              width: "100%",
              zIndex: 10,
              borderRadius: "8px",
              backgroundColor: "#F0FDF4",
              display: "flex",
            },
          }}
        />
      )}
      <ListOfCards />
      <ListOfUsers />
    </Container>
  );
}
export default Home;
