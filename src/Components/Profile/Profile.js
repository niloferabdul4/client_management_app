import React from 'react'
import { ProfileContainer,LogoWrapper,AddLogo,Content} from './profilestyles'
import logoAdd from '../../assets/logoadd.png'
import { SubTitle } from '../Sidebar/sidebarstyles'
import ButtonContainer from '../Button Container/ButtonContainer'
import Form from '../Form/Form'
import { SubText } from '../Modules/modulesstyles'


const Profile = () => {
  
 
  return (
    <ProfileContainer id='profile'>
      <SubTitle>Create Client Profile</SubTitle>
      <SubText>Add some basic information related to the client</SubText>
     <LogoWrapper>
        <AddLogo src={logoAdd} />
       <span>
          <SubTitle>Company Title</SubTitle>
          <Content>Logo ratio shoud be 1:1 and should be 120px X 120 px</Content>
       </span>     
    </LogoWrapper>
     <Form />
     <ButtonContainer/>
    </ProfileContainer>
  )
}

export default Profile
