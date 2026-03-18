import styled from "styled-components";

export const ContainerInput = styled.div`
border: ${({ fillFormBorder }) => (fillFormBorder ? "1px solid #D1D5DB" : "1px solid #DC2626")};
border-radius: 8px;
display: flex;
background-color: #ffff;
align-items: center;
padding: 12px 9px;
gap: 12px;

`;
export const InputContent = styled.input`
border: none;
outline: none;
font-size: ${(props) => props.fontSize};
line-height: 24px;
background-color: transparent;
width: 100%;
`;

export const LabelContent = styled.label`
font-size: 14px;
line-height: 17px;
color: #374151;
display: flex;
flex-direction: column;
gap: 8px;
`;
