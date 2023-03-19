import React,{useState} from 'react'
import Vector from '../../assets/Vector.png'
import { SubTitle } from '../Sidebar/sidebarstyles'
import { PositionWrapper, ThemeContainer} from './themestyles'
import {FormControl,FormLabel,FormControlLabel,InputAdornment,OutlinedInput,InputLabel,RadioGroup,Radio} from '@mui/material'
import { SubText } from '../Modules/modulesstyles'


const Theme = () => {
  const[color,setColor]=useState('#153AC7')
  const handleChange= (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <ThemeContainer id='theme'>
      <SubTitle>Theme SetUp</SubTitle>
      <SubText> Add information about the client to give them a personalized experience</SubText>
      <FormControl halfWidth variant="outlined">
          <InputLabel>Primary Color</InputLabel>
          <OutlinedInput
            value={color}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">
                              <img src={Vector} />
                           </InputAdornment>}
            labelWidth={40}
            
          />
          </FormControl>
          <SubTitle>Login Setup</SubTitle>
          <SubText>Select the look and feel of the login page</SubText>
          <FormControl halfWidth variant="outlined">
          <InputLabel>Use Color</InputLabel>
          <OutlinedInput
            value={color}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">
                              <img src={Vector} />
                           </InputAdornment>}
            labelWidth={40}
            
          />
          </FormControl>
          <PositionWrapper>
              <SubTitle>Where should be the login page</SubTitle>          
              <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Center"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel value="left" control={<Radio />} label="Left" />
                      <FormControlLabel value="right" control={<Radio />} label="Right" />
                      <FormControlLabel value="center" control={<Radio />} label="Center" />
                    </RadioGroup>
                </FormControl>
            </PositionWrapper>
      </ThemeContainer>
    </div>
  )
}

export default Theme;



