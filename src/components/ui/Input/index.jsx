import { ContainerInput, InputContent, LabelContent } from "./styles";

export function Input({
  text,
  icon,
  placeholder,
  value,
  onChange,
  alt,
  type,
  fontSize,
}) {
  return (
    <LabelContent>
      {text}
      <ContainerInput>
        {icon}
        <InputContent
          placeholder={placeholder}
          value={value}
          alt={alt}
          onChange={onChange}
          type={type}
          fontSize={fontSize}
        />
      </ContainerInput>
    </LabelContent>
  );
}
