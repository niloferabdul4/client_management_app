import styled from "styled-components";


const LoginContainer=styled.div`
  height:100vh;
  width: 100vw;
  background-color: #d3d3d3;
  display:flex;
  justify-content:center;
  align-items:center;
 
  `


const LoginCard=styled.div`
  width:  1000px;
  height: 500px;
  margin:100px;
  background-color:white;
  display: flex;
  flex-direction: row;
  
`
const LeftWrapper=styled.div` 
  flex:0.4;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;
  background:white;
 
`

const RightWrapper=styled.div`
flex:0.6;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
gap:25px;  
background: #1334B3;

`
const Title=styled.h3`
  margin:10px;
  
`

const Text=styled.p`
  font-weight: 400;
  text-align: justify;
  align-self:center;
  color:darkgrey;
  font-size:12px;
  align-self:center;
  
`
const Form=styled.form`
display:flex;
flex-direction:column;
gap:10px;
width:100%;
`
const InputWrapper=styled.div`
display:flex;
flex-direction:column;
position:relative;

`
const Input=styled.input`
padding:8px;
text-indent:16px;
font-size:0.7rem;
margin:10px 0px;
position:relative;
border: 1px solid #E6E6E6;
border-radius: 8px;
box-shadow: 0px 12px 48px rgba(3, 0, 55, 0.15);
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

const LoginButton=styled.button`
  background: #1334B3;
  border-radius: 8px;
  color:white;
  margin: 20px 0px;
  width:100%;
  padding:10px;
  font-size: 0.90rem;
  display: flex;
  justify-content: center;
  border: none;
  cursor:pointer;
 
`

const LeftInfo=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:68px;
  width:100%;
  margin:20px 0px;
`
const Image=styled.img`
  height:300px;
  width:400px;
  box-shadow: 0px 12px 48px rgba(3, 0, 55, 0.15);
  border-radius: 20px;
  transform:scale(360deg);
 

`
const RightInfo=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:68px;
  width:100%;
 
`

const Description=styled.p`
margin:10px;
color:white;
font-size: 20px;
font-weight:600;
line-height: 44px;

`

const Content=styled.p`
  font-weight: 400;
  text-align: justify;
  color:white;
  font-size:12px;
 
`

const ErrorLabel=styled.label`
  font-size: 16px;
  color:red;
  margin-top: 10px;

  `
export {LoginContainer,LoginCard,LeftWrapper,RightWrapper,Title,Text,Form,InputWrapper,Input,LoginButton,LeftInfo,RightInfo,Image,Description,Content,ErrorLabel}



