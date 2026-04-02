import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Container, ContainerNotFound, Content, Img, Text } from "./styles";
import imgNotFound from "../../assets/images/notFound.jpg";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerNotFound>
        <Text onClick={() => navigate(-1)}>
          <IoArrowBack size={12} color="#1e2497" />
          <p>Voltar</p>
        </Text>

        <Content>
          <h1>Pagina Nao Encontrada </h1>
          <Img src={imgNotFound} alt="Error 404" />
        </Content>
      </ContainerNotFound>
    </Container>
  );
}
export default NotFound;
