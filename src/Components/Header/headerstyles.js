import styled from "styled-components";
import { mobile } from "../../Responsive";

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;
position: absolute;
width: 1544px;
height: 49px;
left: 356px;
top: 20px;
bac

`
const ClientMasterTitle=styled.h3`

  ${mobile({
        fontSize:'18px'

         })}
`
const RouteText=styled.h5`
color:#686687;
`

export {HeaderContainer,ClientMasterTitle,RouteText};