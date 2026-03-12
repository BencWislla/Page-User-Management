import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
align-items: center;
justify-content: center;
`

export const Percentage = styled.p`
color:${(props) => props.isPositive ? "#22C55E" : "#EF4444"};
font-size: .75rem;
line-height: 1rem;
`

export const ContainerPercetage = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: .25rem;
`
