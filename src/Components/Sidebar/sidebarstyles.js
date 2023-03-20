import styled from "styled-components";

const SidebarContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
position: absolute;
width: 336px;
height: 1000px;
left: 0px;
top: 0px;
background:white;
border-right:0.2px solid lightgrey;
/* Card Shadow/01 */
box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
`

const SubTitle=styled.h3`
    align-self:flex-start;
    margin-bottom: 10px;
    
`
const ButtonContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    height: 143px;
    width: 336px;
    margin:10px 0px;
    
`
const Button=styled.button`
  margin: 10px 0px;
  padding:10px;
  font-size: 1rem;
  display: flex;
  justify-content:flex-start;
  border: none;
  background-color:white; 
  cursor:pointer;
  width: 304px;
  background:${props=>props.id==='active'?  '#1976d2' : ''};
  border-radius: ${props=>props.id==='active'?  '8px' : ''};;
  color:${props=>props.id==='active'?  'white' : ''};
 
`
export {SidebarContainer,Button,SubTitle,ButtonContainer};

