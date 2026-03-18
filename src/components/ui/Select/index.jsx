import { Container, LabelContainer, SelectContainer } from "./styles";

export function Select({
  title,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
  valueFive,
  textOne,
  textTwo,
  textThree,
  textFour,
  textFive,
  nameText,
  onChange,
  value,
}) {
  return (
    <LabelContainer>
      {title}
      <Container>
        <SelectContainer name={nameText} onChange={onChange} value={value}>
          <option value={valueOne}>{textOne}</option>
          <option value={valueTwo}>{textTwo}</option>
          <option value={valueThree}>{textThree}</option>
          <option value={valueFour}>{textFour}</option>
          <option value={valueFive}>{textFive}</option>
        </SelectContainer>
      </Container>
    </LabelContainer>
  );
}
