// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import './Header.css'
// import { Home } from '@mui/icons-material';
// import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Header = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };
//     return (
//         <Box sx={{ mt:3, backgroundColor: 'white',  boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)' }}>
//         <AppBar position="static" sx={{borderRadius: '5px',backgroundColor: 'white', color: 'black' }}>
//             <Container maxWidth="xl" sx={{}}>
//                 <Toolbar disableGutters>

//                     <Box sx={{}}>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ mr: 2, color: 'black', display: { xs: 'none', md: 'flex',} }}
//                     >
//                         <Home/>
//                     </Typography>
//                     </Box>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>

//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//                     >
//                         <Home/>
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        
//                             <Link to={'/resume'}><Button    
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'black', display: 'block' }}
//                             >Resume
//                             </Button></Link>

//                             <Link to={'/portfolio'}><Button
//                                 onClick={handleCloseNavMenu}
//                                 sx={{ my: 2, color: 'black', display: 'block' }}
//                             >Portfolio
//                             </Button></Link>
                        
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseNavMenu}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//         </Box>
//     );
// };

// export default Header;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Resume from '../../pages/Resume/Resume';
import Portfolio from '../../pages/Portfolio/Portfolio';
import './Header.css'
import { fontSize } from '@mui/system';
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

      <Box sx={{ borderBottom: 1, borderColor: 'divider',  backgroundColor: 'white', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)', borderRadius: '6px' }}>
        <Tabs TabIndicatorProps={{style: {background:'#FFC500',}}} value={value} onChange={handleChange} aria-label="basic tabs example">

          <Tab sx={{backgroundColor: '#FFC500',borderTopLeftRadius: '6px' }} icon={<Home sx={{ color: 'black'}}/>} aria-label="phone" {...a11yProps(0)} />

          <Tab sx={{fontSize: '14px', fontWeight: '600'}} label="Resume" {...a11yProps(1)} />

          <Tab sx={{fontSize: '14px', fontWeight: '600'}}  label="Portfolio" {...a11yProps(2)} />

          <Tab sx={{fontSize: '14px', fontWeight: '600'}}  label="Contact Me" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Resume />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Resume/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Portfolio/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Contact/>
      </TabPanel>
    </Box>
  );
}

export default Header;