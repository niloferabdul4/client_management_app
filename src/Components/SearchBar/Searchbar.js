import React from 'react'
import { SearchBar,Input } from './searchbarstyles'
import { SearchOutlined } from '@mui/icons-material'

const Searchbar = () => {
  return (
    <div>
      <SearchBar>
                <Input type='search' placeholder='Search'/>
                <SearchOutlined  style={{fontSize:'16px',color:'lightgrey',position:'absolute',top:'15px',left:'6px'}}/>
      </SearchBar>
    </div>
  )
}

export default Searchbar
