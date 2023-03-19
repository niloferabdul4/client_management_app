import React, { useContext } from 'react'
import { ClientContext } from '../../Context/AppContextProvider'
import { HeaderContainer,ClientMasterTitle,RouteText } from './headerstyles'
const Header = () => {
  const {selectedBtn}=useContext(ClientContext)
  return (
    <>
    <HeaderContainer>
        <ClientMasterTitle>{selectedBtn}</ClientMasterTitle>
        <RouteText>Client Master / {selectedBtn}</RouteText>
    </HeaderContainer>
      
    </>
  )
}

export default Header
