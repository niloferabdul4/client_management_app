import React from 'react'
import { Mainbar,TopWrapper,ModuleTitle,SubText,BottomWrapper } from './modulesstyles'
import module from '../../assets/module.png';
import { SaveButton } from '../Button Container/buttoncontainerstyles';
import SubModules from './SubModules';


const ModuleMainbar = ({selectedModule}) => {
  const currentModule=JSON.stringify(selectedModule)
  return (
    <>
     <Mainbar>
           <TopWrapper>
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <img src={module} />
                <span style={{display:'flex',flexDirection:'column', alignItems:'flex-start',marginLeft:'10px',gap:'6px'}}>
                  <ModuleTitle>{currentModule}</ModuleTitle>
                  <SubText>Select the submodules client can use </SubText> 
                </span>
              </span>            
              <SaveButton>Visible To Clients</SaveButton>
           </TopWrapper>   
           <BottomWrapper>
               <SubModules />
           </BottomWrapper>   
     </Mainbar>
      
    </>
  )
}

export default ModuleMainbar
