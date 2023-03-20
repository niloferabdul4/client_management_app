import styled from "styled-components"


const PaymentContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
    width: 100%;
    height: 515px;
    background: #FFFFFF;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;


`
const Input=styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 4px;
    width: 500px;
    height: 40px;
    font-size:16px;
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
    gap: 4px;
    width: 500px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    font-size:16px;
    color: #939596;
    
    `
    const PaymentModeStatusContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content:space-between;
    padding: 0px;
    gap: 10px;
    width: 1300px;
    height: 51px;
    font-size:14px;
    
    `

    export {PaymentContainer,Input,Select,PaymentModeStatusContainer}