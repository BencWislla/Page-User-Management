import { useState } from "react";
import { UserSearch } from "../UserSearch";
import {
  ContentUsers,
  TableContainer,
  Text,
  TextId,
  UserContainer,
  UserContent,
} from "./styles";
import { Badge } from "../ui/Badge";
import { FaTrash } from "react-icons/fa";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user5.png";

const users = [
  {
    id: 1,
    photo: user1,
    name: "Maria Santos",
    email: "maria.santos@empresa.com",
    cargo: "Administrador",
    status: "Ativo",
    dataCadastro: "15/01/2024",
  },
  {
    id: 2,
    photo: user3,
    name: "Carlos Oliveira",
    email: "carlos.oliveira@empresa.com",
    cargo: "Gerente",
    status: "Ativo",
    dataCadastro: "22/01/2024",
  },
  {
    id: 3,
    photo: user2,
    name: "Ana Costa",
    email: "ana.costa@empresa.com",
    cargo: "Usuário",
    status: "Inativo",
    dataCadastro: "10/02/2024",
  },
  {
    id: 4,
    photo: user5,
    name: "Pedro Almeida",
    email: "pedro.almeida@empresa.com",
    cargo: "Gerente",
    status: "Ativo",
    dataCadastro: "05/03/2024",
  },
  {
    id: 5,
    photo: user4,
    name: "Juliana Ferreira",
    email: "juliana.ferreira@empresa.com",
    cargo: "Usuario",
    status: "Ativo",
    dataCadastro: "18/03/2024",
  },
  {
    id: 6,
    photo: user3,
    name: "Tomas Costa",
    email: "ana.costa@empresa.com",
    cargo: "Programador",
    status: "Inativo",
    dataCadastro: "10/02/2024",
  },
  {
    id: 7,
    photo: user5,
    name: "Joao Almeida",
    email: "pedro.almeida@empresa.com",
    cargo: "Gerente",
    status: "Ativo",
    dataCadastro: "05/03/2024",
  },
  {
    id: 8,
    photo: user2,
    name: "Bia Silva",
    email: "ana.costa@empresa.com",
    cargo: "Programador",
    status: "Inativo",
    dataCadastro: "10/02/2024",
  },
];

export function ListOfUsers() {
  const [search, setSearch] = useState("");
  const [statusUser, setStatusUser] = useState("");
  const [cargoUser, setCargoUser] = useState("");

  function getfilterUser() {
    return users.filter(
      (user) =>
        (user.name || "").toLowerCase().includes(search.toLowerCase()) &&
        (statusUser === "" || user.status === statusUser) &&
        (cargoUser === "" || user.cargo === cargoUser),
    );
  }
  return (
    <ContentUsers>
      <UserSearch
        value={search}
        onChange={setSearch}
        valueCargo={cargoUser}
        valueStatus={statusUser}
        onChangeCargo={setCargoUser}
        onChangeStatus={setStatusUser}
      />
      <TableContainer>
        <thead>
          <th>
            <p>Usuário</p>
          </th>
          <th>
            <p>Email</p>
          </th>
          <th>
            <p>Cargo</p>
          </th>
          <th>
            <p>Status</p>
          </th>
          <th>
            <p>Data de Cadastro</p>
          </th>
          <th>
            <p>Ações</p>
          </th>
        </thead>
        <tbody>
          {getfilterUser().map((user) => {
            const userAtivo = user.status === "Ativo";
            return (
              <tr key={user.id}>
                <td>
                  <UserContainer>
                    <img
                      src={user.photo}
                      alt={user.name}
                      width={32}
                      height={32}
                    />
                    <UserContent>
                      <Text>{user.name}</Text>
                      <TextId>ID: #{user.id}</TextId>
                    </UserContent>
                  </UserContainer>
                </td>
                <td>
                  <Text>{user.email}</Text>
                </td>
                <td>
                  <Text>{user.cargo}</Text>
                </td>
                <td>
                  <Badge
                    isActive={userAtivo}
                    text={userAtivo ? "Ativo" : "Inativo"}
                  ></Badge>
                </td>
                <td>
                  <Text>{user.dataCadastro}</Text>
                </td>
                <td>
                  <FaTrash size={12} color="#9CA3AF" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </ContentUsers>
  );
}
