
import { Download } from '@mui/icons-material'
import {Button} from '@mui/material'
import React,{useState} from 'react'
import Searchbar from '../../Components/SearchBar/Searchbar'
import Selectbar from './Selectbar'
import { ClientslistContainer,TopSection } from './clientsliststyles'
import ReactTable from './ReactTable'

const Clientslist = () => {
  
  const ExportStyles={
                      backgroundColor:'#E8EBF9',
                      textTransform:'Capitalize',
                      width: '101px',
                      height: '40px',
                      borderRadius:'8px',
                      border:'none'
                    }

  return (
    <>
    <ClientslistContainer id='viewClients'>
         <TopSection>
          <Searchbar/>
          <span style={{display:'flex',alignItems:'center'}}>
              <Selectbar/>  
              <Button variant="outlined" style={ExportStyles} startIcon={<Download />}> Export</Button>
          </span>      
         </TopSection>
         <ReactTable />
        
    </ClientslistContainer>
      
    </>
  )
}

export default Clientslist
