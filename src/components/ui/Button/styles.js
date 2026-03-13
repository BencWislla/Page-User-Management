import styled from "styled-components";

export const ContainerButton = styled.button`
width:${({ width }) => width};
color:${({ color }) => color};
background-color: ${({ backgroundColor }) => backgroundColor};
font-size: 16px;
border-radius: 8px;
line-height: 20px;
padding: 14px 27px;
border: none;
`
