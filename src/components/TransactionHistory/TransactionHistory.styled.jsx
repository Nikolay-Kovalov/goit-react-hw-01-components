import styled from "styled-components";


export const Table = styled.table`
 width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
text-align: center;
  background-color: #ffffff;
  color: #808184;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
`

export const TableHead = styled.thead`
 border: 0px solid #b5b5b5;
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
`

export const TableTitle = styled.th`
  width: 33.3%;
  padding: 15px 5px;
`

export const TransactionCell = styled.td`
 padding: 15px 5px;

  text-transform: capitalize;

  transition: background-color 250ms linear;

  cursor: pointer;

  :hover {
  background-color: #c9dcdf;
  transition: background-color 250ms linear;
`

export const TransactionRow = styled.tr`
:nth-child(even) {
  background-color: #ecf1f4;
`