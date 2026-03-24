import { ContainerButton } from "./styles";

export function Button({
  text,
  onClick,
  value,
  disabled,
  icon,
  color,
  backgroundColor,
  width,
  cursor,
}) {
  return (
    <ContainerButton
      onClick={onClick}
      value={value}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}
      width={width}
      cursor={cursor}
    >
      {icon}
      {text}
    </ContainerButton>
  );
}
