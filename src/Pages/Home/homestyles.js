import styled from "styled-components";

const HomeContainer=styled.div`
  width:1544px;
  background-color: brown;

`


const Mainbar=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    width: 1400px;
    left: 350px;
    gap:20px;
    top: 89px;
    box-shadow: rgba(53, 48, 48, 0.15) 2px 2px 2px 2px;
    border-radius: 8px;
    margin:30px 10px;
    border: 0.5px solid lightgrey;
  
     
`
export {HomeContainer,Mainbar}