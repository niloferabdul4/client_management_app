import React,{useContext, useEffect, useState} from 'react';
import Searchbar from '../SearchBar/Searchbar';
import { SidebarContainer,SubTitle,ButtonContainer,Button } from './sidebarstyles'
import { Text} from '../../Pages/Login/loginstyle'
import { ClientContext } from '../../Context/AppContextProvider';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const btns=['View Clients','Add Clients']
  const {selected,setSelected}=useContext(ClientContext)
  const[selectedBtn,setSelectedBtn]=useState('')
  const navigate=useNavigate(null)
  //useEffect(()=>{setSelectedBtn('View Clients')},[])
  const handleClients=(item)=>{
    
    if(selectedBtn==='View Clients')
      {
      navigate('addClients')
      
      }
      else{
        navigate('viewClients')
      }
      
      //setViewClients(true)
      setSelectedBtn(item)
      setSelected(true)
      console.log(selectedBtn)
      
   
  }

  
  return (
    <>
       <SidebarContainer>
            <SubTitle>Company Name</SubTitle>
            <Searchbar/>
            <ButtonContainer>
                <Text>CLIENT MASTER</Text>
                {btns.map(item=>{return <>
                  <Button onClick={()=>handleClients(item)} id={selectedBtn===item? 'active' : ''} >{item}</Button>
                </>
              })}
            </ButtonContainer>
        </SidebarContainer>
    </>
  )
}

export default Sidebar
