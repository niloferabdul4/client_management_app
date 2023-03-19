import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router-dom';
import Profile from '../../Components/Profile/Profile';
import Payment from '../../Components/Payment/Payment';
import Theme from '../../Components/Theme Setup/Theme';
import Modules from '../../Components/Modules/Modules';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const navigate=useNavigate(null)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="CREATE PROFILE" value="1" style={{minWidth:'20%' }}  />
            <Tab label="PAYMENT SETUP" value="2" style={{minWidth:'20%' }}  />
            <Tab label="THEME SETUP" value="3" style={{minWidth:'20%' }} />
            <Tab label="MODULE SETUP" value="4"style={{minWidth:'20%' }} />
          </TabList>
        </Box>
        <TabPanel value="1" >
          <Profile/>
        </TabPanel>
        <TabPanel value="2">
          <Payment/>
        </TabPanel>
        <TabPanel value="3">
          <Theme/>
        </TabPanel>
        <TabPanel value="4">
          <Modules/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
