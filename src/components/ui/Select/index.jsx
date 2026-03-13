import { LabelContainer, SectionContainer } from "../Input/styles";

export function Select({
  title,
  valueOne,
  valueTwo,
  valueThree,
  valueFour,
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
      <SectionContainer name={nameText} onChange={onChange} value={value}>
        <option value="" disabled>
          {textOne}
        </option>
        <option value={valueTwo}>{textTwo}</option>
        <option value={valueThree}>{textThree}</option>
        <option value={valueFour}>{textFour}</option>
        <option value={valueFour}>{textFive}</option>
      </SectionContainer>
    </LabelContainer>
  );
}
