import styled from "styled-components";


const Section=styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 0px 0px;
gap: 24px;
width: 1496px;
height: 48px;  
margin:20px;  
`
const SaveButton=styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 12px;
width: 166px;
height: 40px;
background: rgb(25, 118, 210);
color:white;
border-radius: 8px;   
border:none; 
`

const ResetButton=styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 16px;
gap: 12px;
width: 94px;
height: 40px;
border-radius: 8px;
border:none;
background:white;

`
export {Section,SaveButton,ResetButton}