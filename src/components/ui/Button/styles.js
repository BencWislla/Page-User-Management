import styled from "styled-components";

export const ContainerButton = styled.button`
width:${({ width }) => width};
color:${({ color }) => color};
background-color: ${({ backgroundColor }) => backgroundColor};
cursor: ${({ cursor }) => cursor};
font-size: 12px;
border-radius: 8px;
line-height: 20px;
padding: 8px 12px;
border: none;
display: flex;
align-items: center;
gap: 10px;
`
