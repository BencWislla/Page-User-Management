import { Container, LabelContainer, SelectContainer } from "./styles";

export function Select({
  title,
  arrayOption,
  nameText,
  onChange,
  value,
  color,
  register,
  error,
}) {
  return (
    <LabelContainer>
      {title}
      <Container error={error}>
        <SelectContainer
          name={nameText}
          onChange={onChange}
          value={value}
          color={color}
          {...register}
        >
          {arrayOption.map((option) => (
            <option value={option.value}>{option.text}</option>
          ))}
        </SelectContainer>
      </Container>
    </LabelContainer>
  );
}
