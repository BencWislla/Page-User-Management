import TotalUsuarios from "../../assets/icons/totalUsuarios.png";
import UsuariosAtivos from "../../assets/icons/usuariosAtivos.png";
import UsuariosInativos from "../../assets/icons/usuariosInativos.png";
import NovosUsuarios from "../../assets/icons/novosUsuarios.png";
import { Card } from "../ui/Card/index";
import { Container, ContainerPercetage, Percentage } from "./styles";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
// Realizar um calculo para saber a porcetagem de crescimento ou de queda de usuarios
// Preciso criar uma condiconal para saber se creceu ou caiu, se cresceu uma estelizaçao se nao outra
// o valor atual - o valor do mes passado
// o resultado / pelo mes passado * 100 (para saber o tamanho real daquela mudança em relação ao que a gente já tinha)
// Com o calculo realizado, encontrei numeros positivos e negativos, com isso ja sei que se for negativo os numeros, o icone e a % terao que ser em red e se for positvo em verde
//
const Cards = [
  {
    icon: TotalUsuarios,
    quantity: 1248,
    title: "Total de Usuários",
    monthCurrent: 12,
    lastMonth: 10,
  },
  {
    icon: UsuariosAtivos,
    quantity: 1156,
    title: "Usuários Ativos",
    monthCurrent: 8,
    lastMonth: 14,
  },
  {
    icon: UsuariosInativos,
    quantity: 92,
    title: "Usuários Inativos",
    monthCurrent: 2,
    lastMonth: 5,
  },
  {
    icon: NovosUsuarios,
    quantity: 1156,
    title: "Novos este mês",
    monthCurrent: 11,
    lastMonth: 7,
  },
];

export function ListOfCards() {
  function calculatePercentage(monthLast, monthCurrent) {
    const subtraction = monthCurrent - monthLast;

    return (subtraction / monthLast) * 100;
  }

  return (
    <Container>
      {Cards.map((list) => (
        <div>
          <Card
            img={list.icon}
            alt={list.title}
            numberOfUser={list.quantity}
            title={list.title}
            text="vs mes anterior"
            count={
              <ContainerPercetage>
                {calculatePercentage(list.lastMonth, list.monthCurrent) > 0 ? (
                  <IoMdArrowRoundUp width={9} height={10} color="#22C55E" />
                ) : (
                  <IoMdArrowRoundDown width={9} height={10} color="#EF4444" />
                )}

                <Percentage
                  isPositive={
                    calculatePercentage(list.lastMonth, list.monthCurrent) > 0
                  }
                >
                  {calculatePercentage(
                    list.lastMonth,
                    list.monthCurrent,
                  ).toFixed(2)}
                  %
                </Percentage>
              </ContainerPercetage>
            }
          />
        </div>
      ))}
    </Container>
  );
}
