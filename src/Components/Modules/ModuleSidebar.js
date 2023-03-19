/*import React, { useContext } from 'react'
import { Sidebar } from './modulesstyles'
import { FormGroup,FormControlLabel,Checkbox} from '@mui/material'
import {Tab} from '@mui/material'
import {Tabs} from '@mui/material'
import { TabPanel } from '@mui/lab'
import { ClientContext } from '../../Context/AppContextProvider'
import { Dashboard } from '@mui/icons-material'

const ModuleSidebar = () => {
  
  const {selectedModule,setSelectedModule}=useContext(ClientContext)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleModule=(event)=>{
    setSelectedModule(event.target.name)
    
  }
/*
  const handleChange = (event) => {
    setSelectedModule(prevModule=>({
      ...prevModule,
      [event.target.name]: event.target.checked,
    }));
    
  };
  
  return (
  
    <Sidebar>
        {/*
        <FormGroup >
            <FormControlLabel control={<Checkbox defaultChecked onChange={handleChange}  name="Home/Dashboard"/>} label="Home/Dashboard" />
            <FormControlLabel control={<Checkbox  onChange={handleChange}  name="Helpdesks"/>} label="Helpdesks" />
            <FormControlLabel control={<Checkbox  onChange={handleChange} name="Assets"/>} label="Assets" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="DailyTasks"/>} label="DailyTasks" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="PPM"/>} label="PPM" />
            <FormControlLabel control={<Checkbox  onChange={handleChange} name="Employees"/>} label="Employeess" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="Profile"/>} label="Profile" />
            <FormControlLabel control={<Checkbox onChange={handleChange} name="Transactions"/>} label="Transactions" />
        </FormGroup>
  */
/*
         
    </Sidebar>
  )

export default ModuleSidebar
*/

import React from "react";
import {Checkbox} from "@mui/material";
import { FormControlLabel } from "@mui/material";
import {FormGroup} from "@mui/material";
import { Sidebar } from "./modulesstyles";

const ModuleSidebar=({modules,setModules,setSelectedModule})=> {

  const handleCheckboxChange = (event) => {

   
   const updatedOptions = modules.map((option) =>
      option.label === event.target.name
        ? { ...option, isChecked: event.target.checked }
        : option
    );
    setModules(updatedOptions);
    setSelectedModule(event.target.name)
    
  };

  

  return (
    <Sidebar>
      <FormGroup>
        {modules.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={option.isChecked}
                onChange={handleCheckboxChange}
                name={option.label}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Sidebar>
  );
}

export default ModuleSidebar;

