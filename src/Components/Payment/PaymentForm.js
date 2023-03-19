import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Input,Select } from './paymentstyles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PaymentForm() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={6}>
              <Input type='text' placeholder='Billing Address *'  />
        </Grid>
       <Grid item sm={6}>        
            <Select >
                <option>Select State *</option>
            </Select>
        </Grid>
        <Grid item xs={6}>
            <Select >
                <option>Select City *</option>
            </Select>        
        </Grid>
        <Grid item xs={6}>
            <Select >
                <option>Select Number Of Sites *</option>
            </Select>        
        </Grid>
        
        <Grid item xs={6}>
        <Input type='text' placeholder='Payabale Amount Per Site *' />
        </Grid>
        <Grid item xs={6}>
        <Input type='text' placeholder='Discount % *' />
        </Grid>
        <Grid item xs={6}>
        <Input type='text' placeholder='Reason*' />
        </Grid>
        </Grid>
    </Box>
  );
}
