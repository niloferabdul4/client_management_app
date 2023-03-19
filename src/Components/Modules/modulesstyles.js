import styled from "styled-components";

const ModulesContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    gap: 24px;
    width: 1544px;
    height: 580px;
    background: #FFFFFF;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

`
const Module=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 1496px;
    height: 396px;

`
const Sidebar=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 300px;
    height: 396px;
    font-size:14px;
    border-right:0.2px solid lightgrey;
`
const Mainbar=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
    width: 1152px;
    height: 400px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);


`
const ModuleTitle=styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.0025em;
    color: #030037;
`

const SubText=styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.0025em;
    color: #686687;

`
const TopWrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding-bottom: 10px ;
    gap: 16px;
    width: 1104px;
    height: 60px;
    border-bottom:0.2px solid lightgrey;

`
const BottomWrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    width: 1104px;
    height: 252px;
    overflow-y: scroll;

`
export {ModulesContainer,Module,Sidebar,Mainbar,ModuleTitle,SubText,TopWrapper,BottomWrapper}