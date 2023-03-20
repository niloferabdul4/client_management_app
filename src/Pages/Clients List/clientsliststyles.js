import styled from "styled-components";

const ClientslistContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px;
    position: absolute;
    width: 1400px;
    box-shadow: 0px 1px 5px rgba(3, 0, 55, 0.08);
    border-radius: 8px;
    height: 880px;
    border:0.5px solid lightgrey
    
`


const TopSection=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    padding: 16px 24px;
    gap: 10px;
    width: 1400px;
    height: 70px;
    background-color: #FFFFFF;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
   
    
`

const BottomSection=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 24px;
    width: 1400px;
    height: 80px;
   
`

const NavigationButtons=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 225px;
    height: 40px;
   

`

const NavBtn=styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 12px;
    width: 88px;
    height: 40px;
    background: #F5F5F5;
    border-radius: 8px;
    border:0.5px solid lightgrey;
    color: #686687;
    opacity:${props=>props.id==='disable'? 0 : 1}
   

`
export {ClientslistContainer,TopSection,BottomSection,NavigationButtons,NavBtn}