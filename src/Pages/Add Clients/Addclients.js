import React,{useState} from 'react'
import { AddClientsContainer } from './addclientsstyles'
import Profile from '../../Components/Profile/Profile'
import Payment from '../../Components/Payment/Payment'
import Theme from '../../Components/Theme Setup/Theme'
import ReactTabs from './ReactTabs'
import Modules from '../../Components/Modules/Modules'

const Addclients = () => {
  const [value,setValue]=useState('')
const handleChange=(event)=>{
  setValue(event.target.value)
}

  return (
    
    <AddClientsContainer id='addClients'>
         <ReactTabs />         
    </AddClientsContainer>
  )
}

export default Addclients
