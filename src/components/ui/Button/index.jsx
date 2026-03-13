import { ContainerButton } from "./styles";

export function Button({ text, onClick, value, disabled,icon }) {
  return (
    <ContainerButton onClick={onClick} value={value} disabled={disabled}>
      {text}{icon}
    </ContainerButton>
  );
}
