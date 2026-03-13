import styled from "styled-components";

export const ContainerInput = styled.div`
border: 1px solid #D1D5DB;
border-radius: 8px;
display: flex;
flex-direction: ${({ direction }) => direction};
gap: ${({ gap }) => gap};
background-color: ${(backgroudColor) => backgroudColor};
`
export const InputContent = styled.input`
border: none;
outline: none;
padding: 12px 16px;
font-size: 1rem;
line-height: 24px;
`

export const LabelContent = styled.label`
font-size: 14px;
line-height: 17px;
color: #374151;
`
