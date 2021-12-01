import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PortfolioPanel from './PortfolioPanel';

const Portfolio = () => {
    return (
        <Box style={{maxHeight: '75vh', overflow: 'auto'}}  sx={{ mt: 3, p: 4, borderRadius: '6px', backgroundColor: 'white', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)' }}>
            <Box>
                <Typography sx={{ mb: 4 }} variant='h6'>Portfolios</Typography>
            </Box>
            <Box>
                <PortfolioPanel/>
            </Box>
        </Box>
    );
};

export default Portfolio;