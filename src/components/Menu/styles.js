import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  gap: 8px;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;


  h1 {
    font-size: 18px;
    line-height: 28px;
    color: #111827;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e5e7eb;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 0.75rem;
  justify-content: space-between;
`;

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 12px;
  gap: 1.125rem;
  width: 14.4375rem;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${({ ativo }) => (ativo ? "#2563EB" : "transparent")};
  color: ${({ ativo }) => (ativo ? "#FFFFFF" : "#374151")};
  &:hover {
    background-color: ${({ ativo }) => (ativo ? "#2563EB" : "#f1f1f165")};
  }
`;

export const TextMenu = styled.p`
  font-size: 0.875rem;
  line-height: 20px;
`;

export const ContainerAdmin = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #e5e7eb;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

`;

export const ContentAdmin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 0.75rem;
`;

export const ImgPerfil = styled.img`
  border-radius: 100%;
`;

export const NameAdmin = styled.p`
  font-size: 0.875rem;
  color: #111827;
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const TextAdmin = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 16px;
  letter-spacing: -0.5px;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const TitleHeader = styled.h1`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #1f2937;
`;

export const TextHeader = styled.p`
  font-size: 16px;
  color: #4b5563;
  line-height: 24px;
  letter-spacing: -0.5px;
`;

export const NotificationsHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 16px;
`

export const ContentPageChildren = styled.div`
background-color: #F3F4F6;
height: 100%;
`
