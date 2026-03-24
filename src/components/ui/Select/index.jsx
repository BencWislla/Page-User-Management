import { Container, LabelContainer, SelectContainer } from "./styles";

export function Select({
  title,
  arrayOption,
  nameText,
  onChange,
  value,
  color,
}) {
  return (
    <LabelContainer>
      {title}
      <Container>
        <SelectContainer
          name={nameText}
          onChange={onChange}
          value={value}
          color={color}
        >
          {arrayOption.map((option) => (
            <option value={option.value}>{option.text}</option>
          ))}
        </SelectContainer>
      </Container>
    </LabelContainer>
  );
}
