import { Container, TextContent } from "./styles";

export function Badge({ text, isActive }) {
  return (
    <Container isActive={isActive}>
      <TextContent>{text}</TextContent>
    </Container>
  );
}
