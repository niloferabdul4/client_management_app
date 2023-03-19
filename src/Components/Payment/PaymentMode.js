import React from 'react'
import { FormControl,RadioGroup,FormControlLabel,FormLabel,Radio } from '@mui/material'

const PaymentMode = () => {
  return (
    <div>
      <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Payment Status</FormLabel>
  <RadioGroup row
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Paid"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Paid" />
    <FormControlLabel value="male" control={<Radio />} label="Pending" />
  </RadioGroup>
</FormControl>
    </div>
  )
}

export default PaymentMode
