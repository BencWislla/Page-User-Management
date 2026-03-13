import { Container } from "./styles";

export function Badge({ text, onClick, isActive }) {
  return (
    <Container onClick={onClick} isActive={isActive}>
      {text}
    </Container>
  );
}
