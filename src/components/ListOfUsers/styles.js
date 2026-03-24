import styled from "styled-components";

export const TableContainer = styled.table`
border: 1px solid #E5E7EB;
border-collapse: separate;
border-spacing: 0;
border-radius: 12px;
overflow: hidden;
table-layout: fixed;
thead{
  background-color: #F9FAFB;
  display: table;
  width: 100%;
  table-layout: fixed;

}
th{
  color: #4B5563;
  font-size: 12px;
  line-height:15px;
  font-weight: 600;
  text-align: center;
  padding: 14px 12px;


}
td{
  background-color: #fff;
  padding: 16px 26px;
  text-align: end;

}


td,th{
  border-left:none;
  border-right:none;
  border-bottom: 1px solid #E5E7EB;


}
tbody {
  display: block;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;


}
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;

}
thead th:nth-child(1), tbody td:nth-child(1),
  thead th:nth-child(2), tbody td:nth-child(2) { width: 25%; }

  thead th:nth-child(3), tbody td:nth-child(3) { width: 15%; }

  thead th:nth-child(4), tbody td:nth-child(4),
  thead th:nth-child(6), tbody td:nth-child(6) { width: 10%; }

  thead th:nth-child(5), tbody td:nth-child(5) { width: 15%; }


`


export const TextId = styled.p`
font-size: 10px;
color: #6B7280;
line-height: 16px;
`
export const Text = styled.p`
  font-size: 12px;
  color: #111827;
  line-height: 20px;
  text-align: start;
  `

export const UserContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 12px;
`

export const UserContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`
export const ContentUsers = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

`
