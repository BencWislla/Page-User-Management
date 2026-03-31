import { ContainerInput, InputContent, LabelContent } from "./styles";

export function Input({
  text,
  icon,
  placeholder,
  value,
  onChange,
  alt,
  type,
  register,
  error,
}) {
  return (
    <LabelContent>
      {text}
      <ContainerInput error={error}>
        {icon}
        <InputContent
          placeholder={placeholder}
          value={value}
          alt={alt}
          onChange={onChange}
          type={type}
          {...register}
        />
      </ContainerInput>
    </LabelContent>
  );
}
