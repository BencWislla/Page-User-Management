import { ContainerInput, InputContent, LabelContent } from "./styles";

export function Input({
  text,
  icon,
  placeholder,
  value,
  onChange,
  alt,
  type,

  fillFormBorder,
}) {
  return (
    <LabelContent>
      {text}
      <ContainerInput fillFormBorder={fillFormBorder}>
        {icon}
        <InputContent
          placeholder={placeholder}
          value={value}
          alt={alt}
          onChange={onChange}
          type={type}
        />
      </ContainerInput>
    </LabelContent>
  );
}
