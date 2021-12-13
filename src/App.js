import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile';
import Box from '@mui/material/Box';
// import { minHeight, shadows } from '@mui/system';
// import { Routes, Route, Link } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <Box>
    <Container>
    <Box>
      <Grid container spacing={{ xs: 2 }}>
        <Grid item sx={{mt: '25px',}} xs={12} sm={5} md={4} lg={3}>
          <Profile/>
        </Grid>

        <Grid item sx={{mt: '25px'}} xs={12} sm={7} md={8} lg={9}>
          <Box sx={{borderRadius: '6px', gap:3 }}>
            <Header />
            <br/>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Box>
  );
}

export default App;
