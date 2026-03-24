import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 72px;
height: 100%;
`
export const Img = styled.img`
width: 600px;
height: 300px;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

h1{
  font-size: 20px;
  color: #1e2497;
  font-weight: bold;
}
`

export const ContainerNotFound = styled.div`
background-color: #fff;
border-radius: 30px;
padding: 25px;
display: flex;
flex-direction: column;
gap: 12px;

`

export const Text = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
border-bottom: 1px solid #787ff950;
width:75px;
padding: 3px;
cursor: pointer;

p{
  font-size: 12px;
  color: #1e2497;

}
`
