# 🧑‍💼 Gestão de Usuários (React)

Este projeto é uma aplicação web desenvolvida em **React** para gerenciamento de usuários, permitindo criar, visualizar e remover usuários de forma dinâmica.

---

## 🚀 Funcionalidades

- 📋 Listagem de usuários (Home)
- ➕ Criação de novos usuários
- 🗑️ Remoção de usuários
- 🔍 Filtros por nome, cargo e status
- ⚠️ Validação de formulários
- 🎨 Interface moderna com Styled Components
- 🧭 Navegação entre páginas com React Router
- 🧑‍🎨 Avatar automático para usuários
- 📊 Dashboard com cards de métricas (mockados)

---

## 🗂️ Estrutura de Páginas

### 🏠 Home

- Exibe a lista de usuários cadastrados
- Permite filtrar usuários
- Permite deletar usuários
- Exibe métricas através de cards

### 📝 Registro de Usuário

- Formulário para criação de novos usuários
- Validação com **Zod** e **React Hook Form**

### ❌ Página Não Encontrada

- Exibida quando a rota não existe

---

## 🛠️ Tecnologias Utilizadas

- React 19
- React Router DOM
- React Hook Form
- Zod (validação de formulários)
- Styled Components
- Ant Design (antd)
- React Icons
- React Initials Avatar

---

## 📦 Dependências

```json
{
  "@hookform/resolvers": "^5.2.2",
  "@testing-library/dom": "^10.4.1",
  "@testing-library/jest-dom": "^6.9.1",
  "@testing-library/react": "^16.3.2",
  "@testing-library/user-event": "^13.5.0",
  "antd": "^6.3.4",
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "react-hook-form": "^7.71.2",
  "react-icons": "^5.5.0",
  "react-initials-avatar": "^1.1.2",
  "react-router-dom": "^7.13.1",
  "react-scripts": "5.0.1",
  "styled-components": "^6.3.11",
  "web-vitals": "^2.1.4",
  "zod": "^4.3.6"
}
```

---

## 🔌 API

O projeto utiliza uma API local baseada em um projeto separado (baixado do GitHub), executado em paralelo no ambiente de desenvolvimento.

📁 Essa API simula um backend real e está conectada à aplicação React via requisições HTTP.

### 🔗 Integração

- A API roda separadamente no Visual Studio Code
- A aplicação React consome os dados via `fetch`

### Endereço base:

```bash
http://localhost:3000/users
```

### Métodos utilizados:

- `GET /users` → Listar usuários
- `POST /users` → Criar usuário
- `DELETE /users/:id` → Remover usuário

💡 Essa abordagem simula um ambiente real onde frontend e backend são aplicações separadas.

---

## 📊 Dashboard (Cards)

Os cards exibidos na aplicação utilizam **dados mockados (fixos)**.

Isso foi feito porque a API atual não fornece métricas como:

- Total de usuários por período
- Comparação com mês anterior
- Crescimento percentual

💡 Os dados mockados simulam um cenário real de dashboard administrativo.

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o projeto

```bash
npm start
```

---

## 🧑‍🎨 Avatar de Usuários

- Usuários possuem avatar automático
- Caso não exista imagem, é gerado um avatar com iniciais

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar:

- Manipulação de estado com React
- Consumo de API
- Formulários e validação
- Organização de componentes
- Estilização com Styled Components

---

## 📌 Melhorias Futuras

- ✏️ Edição de usuários
- 🔐 Autenticação
- 📊 Integração real dos dados do dashboard
- 🌐 Deploy da aplicação

---

## 👨‍💻 Autor

Wislla Benicio 🚀

---

## 📄 Licença

Este projeto está sob a licença MIT.
