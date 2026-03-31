import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "antd";
import { useState } from "react";
import FormSchema from "./schema";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Container, Content, Divisor } from "./styles";

const optionStatus = [
  { text: "Selecione o estado", value: "" },
  { text: "Ativo", value: "Ativo" },
  { text: "Inativo", value: "Inativo" },
];

const optionCargo = [
  { text: "Selecione o cargo", value: "" },
  { text: "Gerente", value: "Gerente" },
  { text: "Programador", value: "Programador" },
  { text: "Usuário", value: "Usuário" },
  { text: "Administrador", value: "Administrador" },
];

export function RegisterUsers() {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm({
    defaultValues: {
      nomeCompleto: "",
      email: "",
      cargo: "",
      status: "",
      senha: "",
      confirmarSenha: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const navigate = useNavigate();

  function onCancel() {
    reset();
    navigate("/");
  }

  function onSubmit() {
    setError(false);

    navigate("/", {
      state: {
        alertSuccess: true,
      },
    });
  }

  function onError() {
    setError(true);
  }

  return (
    <>
      {error && (
        <Alert
          type="error"
          title="Erro no formulário"
          description="por favor, preencha os dados corretamente"
          banner
          styles={{
            title: {
              fontSize: "12px",
              color: "#DC2626",
              fontWeight: "600",
              margin: "0px",
            },
            icon: { fontSize: "24px", color: "#DC2626", alignSelf: "center" },
            description: {
              fontSize: "10px",
              color: "#DC2626",
              fontWeight: "400",
            },
            root: {
              position: "absolute",
              top: 40,
              right: 0,
              width: "400px",
              zIndex: 10,
              borderRadius: "8px",
              backgroundColor: "#FEE2E2",
              display: "flex",
            },
          }}
        />
      )}
      <Container onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          type={"text"}
          placeholder={"Digite o nome completo"}
          text={"Nome Completo *"}
          register={{ ...register("nomeCompleto") }}
          error={errors.nomeCompleto}
        />
        <Input
          type={"email"}
          placeholder={"usuario@empresa.com"}
          text={"Email *"}
          register={{ ...register("email") }}
          error={errors.email}
        />
        <Select
          title={"Cargo *"}
          arrayOption={optionCargo}
          register={{ ...register("cargo") }}
          error={errors.cargo}
        />
        <Select
          title={"Status *"}
          arrayOption={optionStatus}
          register={{ ...register("status") }}
          error={errors.status}
        />
        <Input
          type={"password"}
          placeholder={"Digite a senha"}
          text={"Senha *"}
          register={{ ...register("senha") }}
          error={errors.senha}
        />
        <Input
          type={"password"}
          placeholder={"Confirmar Senha"}
          text={"Confirmar Senha *"}
          register={{ ...register("confirmarSenha") }}
          error={errors.confirmarSenha}
        />
        <Divisor></Divisor>
        <Content>
          <Button
            text={"Cancelar"}
            color={"#374151"}
            backgroundColor={"#E5E7EB"}
            cursor={"pointer"}
            onClick={onCancel}
            type="button"
          />
          <Button
            text={"Salvar Usuário"}
            cursor={"pointer"}
            color={"#fff"}
            backgroundColor={"#3B82F6"}
            type="submit"
          />
        </Content>
      </Container>
    </>
  );
}
