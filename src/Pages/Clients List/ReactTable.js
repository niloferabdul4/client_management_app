import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '../../data';
import { Avatar} from '@mui/material';
import {Pagination} from '@mui/material';
import { BottomSection,NavigationButtons,NavBtn } from './clientsliststyles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F8F9FD',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: 'white',
    border:'none',    
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const avatarStyles={width: '30px',  height: '30px',marginRight:'5px'}

function createData(company_name, email_address,phone_no,contact_person,facilitator,sites,tenants,tenant_groups,actions) {
  return { company_name, email_address,phone_no,contact_person,facilitator,sites,tenants,tenant_groups,actions };
}

const clients_data = data;

export default function CustomizedTables() {
  const [page,setPage]=useState(1)
  const [rowsPerPage,setRowsPerPage]=useState(10)

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - clients_data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= clients_data.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <>
    <TableContainer sx={{minHeight: 700}} >
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell >Company Name</StyledTableCell>
            <StyledTableCell align="left">Email Address</StyledTableCell>
            <StyledTableCell align="left">Phone No</StyledTableCell>
            <StyledTableCell align="left">Contact Person</StyledTableCell>
            <StyledTableCell align="left">Facilitator</StyledTableCell>
            <StyledTableCell align="left">Sites</StyledTableCell>
            <StyledTableCell align="left">Tenants</StyledTableCell>
            <StyledTableCell align="left">Tenant Groups</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0? clients_data
          .slice( page * rowsPerPage - rowsPerPage, page * rowsPerPage):clients_data)
          .map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <span style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Avatar style={avatarStyles} src={row.icon} />
                    {row.company_name}
                </span>
              </StyledTableCell>
              <StyledTableCell align="left">{row.email_address}</StyledTableCell>
              <StyledTableCell align="left">{row.phone_no}</StyledTableCell>
              <StyledTableCell align="left">{row.contact_person}</StyledTableCell>
              <StyledTableCell align="left">{row.facilitator}</StyledTableCell>
              <StyledTableCell align="left">{row.sites}</StyledTableCell>
              <StyledTableCell align="left">{row.tenants}</StyledTableCell>
              <StyledTableCell align="left">{row.tenant_groups}</StyledTableCell>
              <StyledTableCell align="left">{row.actions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    <BottomSection>
        <Pagination count={3} 
                          
                          page={page}
                          onChange={handleChangePage}
                          //rowsPerPage={rowsPerPage}
                          //onChangeRowsPerPage={handleChangeRowsPerPage}
                          shape="rounded"  
                          color='primary'
                          />
         <NavigationButtons>
            <NavBtn onClick={() => selectPageHandler(page - 1)} id={page > 1 ? "" : "disable"}>◀ Prev</NavBtn>
            <NavBtn onClick={() => selectPageHandler(page + 1)} id={page < clients_data.length / 10 ? "" : "disable"}> Next ▶</NavBtn>
        </NavigationButtons>                 
        
    </BottomSection>
   
    </>
  );
}
