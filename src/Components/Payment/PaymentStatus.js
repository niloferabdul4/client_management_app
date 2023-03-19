import React from 'react';
import { FormGroup,FormControlLabel,Checkbox } from '@mui/material';
import { Label } from '@mui/icons-material';


export default function PaymentStatus() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
     <Label>Payment Status</Label>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="UPI"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Net Banking"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Cash"
      />

<FormControlLabel
        control={
          <Checkbox
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="Cheque"
      />
     
     <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedE}
            onChange={handleChange}
            name="checkedE"
            color="primary"
          />
        }
        label="Other"
      />
    </FormGroup>
  );
}