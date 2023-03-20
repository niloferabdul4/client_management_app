import styled from "styled-components";

const HeaderContainer=styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 20px;
  position: absolute;
  width: 1544px;
  height: 49px;
  left: 356px;
  top: 30px;
 
`
const ClientMasterTitle=styled.h3`
 font-size:20px;
`
const RouteText=styled.h5`
color:#686687;
`

export {HeaderContainer,ClientMasterTitle,RouteText};