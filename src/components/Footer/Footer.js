import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#1E1E1E', mt: 4, borderRadius: '10px', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)' }}>
      <Grid container spacing={{ xs: 2, md: 3,}} sx={{ pl: 6, pr: 3, py: .5, display: 'flex', justifyContent: 'space-between'}}>

            <Typography sx={{color: 'lightgray'}}>Adnan Ahmed</Typography>
            <Typography sx={{color: 'lightgray'}}> Developed by <span style={{color: '#FFC500'}}>Adnan Ahmed</span></Typography>
            <Typography sx={{color: 'lightgray'}}> Design Idea courtesy <span style={{color: '#FFC500'}}><a style={{textDecoration: 'none', color: 'inherit'}} href="https://themeforest.net/user/tavonline">Travonline</a></span></Typography>

      </Grid>
    </Box>
  );
}

export default Footer;