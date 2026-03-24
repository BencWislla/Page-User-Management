import { Input } from "../ui/Input";
import { Select } from "../ui/Select";

const register = [
  { title: "Nome Completo *", text: "Digite o nome completo" },
  { title: "Email *", text: "usuario@empresa.com" },
];
const SelectWork = [
  {
    title: "Cargo *",
    text: "Selecione um cargo",
    textOne: "Gerente",
    textTwo: "Usuário",
    textThree: "Administrador",
    textFour: "Programador",
  },
  {
    title: "Status *",
    text: "Tipo de estado",
    textOne: "Ativo",
    textTwo: "Inativo",
  },
];

export function RegisterUsers() {
  return (
    <div>
      <div>
        {register.map((user) => (
          <div>
            <Input type={"text"} text={user.title} placeholder={user.text} />
          </div>
        ))}
        {SelectWork.map((user) => (
          <div>
            {" "}
            <Select
              title={user.title}
              textOne={user.text}
              textTwo={user.textOne}
              textThree={user.textTwo}
              textFour={user.textThree}
              textFive={user.textFour}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
