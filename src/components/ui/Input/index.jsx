import { ContainerInput, InputContent, LabelContent } from "./styles";

export function Input({ text, icon, placeholder, value, onChange, alt, type }) {
  return (
    <ContainerInput>
      {icon}
      <LabelContent>
        {text}
        <InputContent
          placeholder={placeholder}
          value={value}
          alt={alt}
          onChange={onChange}
          type={type}
        />
      </LabelContent>
    </ContainerInput>
  );
}
