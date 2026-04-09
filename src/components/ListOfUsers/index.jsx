import { useEffect, useState } from "react";
import Avatar from "react-initials-avatar";
import { UserSearch } from "../UserSearch";
import { FaTrash } from "react-icons/fa";
import { Badge } from "../ui/Badge";
import {
  ContentUsers,
  IconeAvatar,
  TableContainer,
  Text,
  TextId,
  UserContainer,
  UserContent,
} from "./styles";

export function ListOfUsers() {
  const [search, setSearch] = useState("");
  const [statusUser, setStatusUser] = useState("");
  const [cargoUser, setCargoUser] = useState("");
  const [users, setUsers] = useState([]);

  function getfilterUser() {
    return users.filter(
      (user) =>
        (user.name || "").toLowerCase().includes(search.toLowerCase()) &&
        (statusUser === "" || user.status === statusUser) &&
        (cargoUser === "" || user.cargo === cargoUser),
    );
  }

  async function getUsers() {
    const response = await fetch("http://localhost:3000/users");

    const result = await response.json();
    setUsers(result);
  }

  useEffect(() => {
    getUsers();
  }, []);

  async function deleteUser(id) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar usuário");
      }
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      alert("Erro ao deletar usuário");
    }
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
                    <IconeAvatar>
                      <Avatar name={user.nomeCompleto} size={32} />
                    </IconeAvatar>
                    <UserContent>
                      <Text>{user.nomeCompleto}</Text>
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
                <td onClick={() => deleteUser(user.id)}>
                  <FaTrash size={12} color="#9CA3AF" cursor={"pointer"} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableContainer>
    </ContentUsers>
  );
}
