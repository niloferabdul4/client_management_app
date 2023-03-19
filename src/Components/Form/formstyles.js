import styled from "styled-components";


const Input=styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 6px;
    width: 700px;
    height: 40px;
    font-size:14px;
    color: #939596;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
   
    `

    const Select=styled.select`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 6px;
    width: 700px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    font-size:14px;
    color: #939596;
    
    `

    export {Input,Select}