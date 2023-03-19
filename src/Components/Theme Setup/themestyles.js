import styled from "styled-components";
const ThemeContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 1544px;
    height: 661px;
    top: 92px;
    filter: drop-shadow(0px 1px 5px rgba(3, 0, 55, 0.08));
    border-radius: 8px;
    gap:20px;
   
`
const PositionWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 1496px;
    height: 147px;
    color: #939596;

`
export {ThemeContainer,PositionWrapper}