import styled from "styled-components"

export const  Button = styled.button`
background: #000;
color: #fff;
padding: 10px 50px;
font-size: 16px;
font-weight: 500;
min-width: 220px;
border-radius: 6px;
cursor: pointer;
/* box-shadow: 5px 5px 20px #000; */
transition: 0.4s background ease-in;

&:hover{
  /* box-shadow: 2px 2px 15px #000; */
  color: black;
  background: #fff;
  font-weight: 600;
  border: 0.5px solid #000;
  transition: 0.3s background ease-in;
}`


export const  OutlineBtn = styled(Button)`

background: #fff;
color: #000;
border: 2px solid #000;
&:hover{
  /* box-shadow: 2px 2px 15px #000; */
  color: white;
  background: #000;
  font-weight: 600;
  border: 0.5px solid #000;
}


`