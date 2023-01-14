import styled from "styled-components";

function generateRandomColor() {
  let color = '#';
  for (let i = 0; i < 3; i+=1)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

export const Statistics = styled.section`
width: 300px;
margin-left: auto;
margin-right: auto;
margin-bottom: 35px;
border-radius: 5px;
background-color: #e3e6e8;
overflow: hidden;
`
export const Title = styled.h2`
margin: 0;
padding: 25px 0;
color: #4f585e;
text-align: center;
font-size: 1rem;
text-transform: uppercase;
`
export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin: 0;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 60px;
  height: 60px;
  padding: 5px;

  text-align: center;
  color: #FFFFFF;
  background-color: ${generateRandomColor()};
  border: 1px solid black;

`

export const Label = styled.span`
  margin-bottom: 5px;

  font-size: 0.7rem;
`

export const Percentage = styled.span`
 font-size: 1.2rem;
`