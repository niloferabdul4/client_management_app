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

