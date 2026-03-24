import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { IoSearch } from "react-icons/io5";
import { Container, ContentAddUser } from "./styles";

const optionStatus = [
  { text: "Todos os status", value: "" },
  { text: "Ativo", value: "Ativo" },
  { text: "Inativo", value: "Inativo" },
];
const optionCargo = [
  { text: "Todos os cargos", value: "" },
  { text: "Gerente", value: "Gerente" },
  { text: "Usuário", value: "Usuário" },
  { text: "Programador", value: "Programador" },
  { text: "Administrador", value: "Administrador" },
];
export function UserSearch({
  value,
  onChange,
  valueStatus,
  onChangeStatus,
  valueCargo,
  onChangeCargo,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <ContentAddUser>
          <Input
            icon={<IoSearch color="#9CA3AF" size={16} />}
            placeholder={"Buscar por nome ou email..."}
            type={"text"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <Select
            color={"#374151"}
            value={valueStatus}
            onChange={(e) => onChangeStatus(e.target.value)}
            arrayOption={optionStatus}
          />
          <Select
            color={"#374151"}
            arrayOption={optionCargo}
            value={valueCargo}
            onChange={(e) => onChangeCargo(e.target.value)}
          />
        </ContentAddUser>
        <div>
          <Button
            text={"Novo Usuario"}
            icon={<FiPlus size={14} color="#fff" />}
            color={"#ffff"}
            backgroundColor={"#2563EB"}
            onClick={() => navigate("/Register")}
            cursor={"pointer"}
          />
        </div>
      </Container>
    </div>
  );
}
