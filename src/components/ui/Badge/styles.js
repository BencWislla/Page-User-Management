import styled from "styled-components";

export const Container = styled.button`
background-color: ${({ isActive }) => isActive ? "#DCFCE7" : "#E5E7EB"};
color: ${({ isActive }) => isActive ? "#15803D" : "#374151"};
border-radius: 9999px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
width: 62px;
height: 24px;
font-size: 12px;
line-height: 15px;
border: none;
cursor: pointer;
`

