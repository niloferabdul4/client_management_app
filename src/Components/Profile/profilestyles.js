import styled from "styled-components";
import { mobile } from "../../Responsive";
 
const ProfileContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
    gap: 24px;
    width: 1400px;
    height: 700px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom:20px;
   

`

const LogoWrapper =styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
    height: 120px;
    width: 1400px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
   
`

const Content=styled.h5`
    font-size:16px;
    font-weight:400;
`

const AddLogo=styled.img`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 90px;
    height: 90px;
    opacity: 0.8;
    /* Grey/Light/100% */
    border: 1px solid #E6E6E6;
    border-radius: 160px;
    flex: none;
    order: 0;
    flex-grow: 0;

`
export {ProfileContainer,LogoWrapper,AddLogo,Content}