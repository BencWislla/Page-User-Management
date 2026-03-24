import styled from "styled-components"


export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
gap: 24px;


`
export const Container = styled.div`
 flex: 1;
  margin: 0;
`;

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
