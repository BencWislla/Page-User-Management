import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ isActive }) => isActive ? "#DCFCE7" : "#E5E7EB"};
border-radius: 9999px;
padding: 4px 45px 4px 22px;
width: 62px;
height: 24px;
`
export const TextContent = styled.p`
font-size: 12px;
line-height: 15px;
color: ${({ isActive }) => isActive ? "#15803D" : "#374151"};
`
