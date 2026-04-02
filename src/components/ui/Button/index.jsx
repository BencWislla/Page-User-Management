import { ContainerButton } from "./styles";

export function Button({
  text,
  onClick,
  value,

  icon,
  color,
  backgroundColor,
  cursor,
  type,
}) {
  return (
    <ContainerButton
      onClick={onClick}
      value={value}
      color={color}
      backgroundColor={backgroundColor}
      cursor={cursor}
      type={type}
    >
      {icon}
      {text}
    </ContainerButton>
  );
}
