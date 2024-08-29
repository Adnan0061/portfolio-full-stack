import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Resume from '../../pages/Resume/Resume';
import Portfolio from '../../pages/Portfolio/Portfolio';
import './Header.css'
// import { fontSize } from '@mui/system';
import { Home } from '@mui/icons-material';
import './Header.css'
import Contact from '../../pages/Contact/Contact';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider',  backgroundColor: 'white', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)', borderRadius: '6px' }} >
        <Tabs TabIndicatorProps={{style: {background:'#FFC500',}}} value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs">

          <Tab sx={{backgroundColor: '#FFC500',borderTopLeftRadius: '6px' }} icon={<Home sx={{ color: 'black'}}/>} aria-label="phone" {...a11yProps(0)} />

          <Tab sx={{fontSize: '14px', fontWeight: '600', }} label="Resume" {...a11yProps(1)} />

          <Tab sx={{fontSize: '14px', fontWeight: '600'}}  label="Portfolio" {...a11yProps(2)} />

          {/* <Tab sx={{fontSize: '14px', fontWeight: '600'}}  label="Contact Me" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Resume />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Portfolio/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Contact/>
      </TabPanel>
    </Box>
  );
}

export default Header;
