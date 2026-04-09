import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsLayoutSplit } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";
import Logo from "../../assets/icons/logo.png";
import ImgAdmin from "../../assets/images/imgPerfil.jpg";
import {
  Container,
  ContainerAdmin,
  ContainerHeader,
  ContainerMenu,
  ContainerPage,
  ContainerTitle,
  ContentAdmin,
  ContentMenu,
  ContentPageChildren,
  ImgPerfil,
  MenuSection,
  NameAdmin,
  NotificationsHeader,
  TextAdmin,
  TextMenu,
  TitleHeader,
} from "./styles";

const linkPages = [
  {
    icon: <BsLayoutSplit size={20} />,
    titlePage: "Dashboard",
    page: "/",
  },
  { icon: <FaUsers size={20} />, titlePage: "Usuários", page: "/Register" },
  { icon: <GoGraph size={20} />, titlePage: "Relatórios", page: "" },
  { icon: <FaGear size={20} />, titlePage: "Configurações", page: "" },
];

export function Menu(props) {
  const { children, title } = props;
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(item) {
    navigate(item.page);
  }

  return (
    <Container>
      <MenuSection>
        <div>
          <ContainerTitle>
            <img src={Logo} width="32px" height="32px" alt="logo" />
            <h1>AdminPanel</h1>
          </ContainerTitle>
          <ContainerMenu>
            {linkPages.map((option) => (
              <ContentMenu
                key={option.titlePage}
                onClick={() => handleClick(option)}
                ativo={location.pathname === option.page}
              >
                <div>{option.icon} </div>
                <TextMenu>{option.titlePage}</TextMenu>
              </ContentMenu>
            ))}
          </ContainerMenu>
        </div>
        <ContainerAdmin>
          <ContentAdmin>
            <ImgPerfil
              src={ImgAdmin}
              alt="admistrador"
              width={36}
              height={36}
            />
            <div>
              <NameAdmin>Wislla Benicio</NameAdmin>
              <TextAdmin>Admin</TextAdmin>
            </div>
          </ContentAdmin>
          <div>
            <RxExit color="#9CA3AF" width={16} height={20} />
          </div>
        </ContainerAdmin>
      </MenuSection>
      <ContainerPage>
        <ContainerHeader>
          <header>
            <TitleHeader>{title}</TitleHeader>
          </header>
          <NotificationsHeader>
            <IoMdNotifications width={30} height={40} color="#9CA3AF" />
            <ImgPerfil
              src={ImgAdmin}
              alt="admistrador"
              width={32}
              height={32}
            />
          </NotificationsHeader>
        </ContainerHeader>
        <ContentPageChildren>{children}</ContentPageChildren>
      </ContainerPage>
    </Container>
  );
}
