import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ isActive }) => isActive ? "#DCFCE7" : "#E5E7EB"};
border-radius: 99px;
padding: 4px 22px;
width: 62px;
height: 24px;
`
export const TextContent = styled.p`
font-size: 10px;
line-height: 15px;
font-weight:500;
color: ${({ isActive }) => isActive ? "#15803D" : "#374151"};
`
