import React from 'react';
import Button from '@mui/material/Button';
import themeOptions from '../../utils/themeOptions';
import './CustomButton.css'
// import { borderRadius, display, height, lineHeight, margin, minWidth, textAlign, width } from '@mui/system';

const CustomButton = ({text, icon, type, value}) => {
    return (
        <Button 
        type={type}
        value={value}
        sx={{
            backgroundColor: `${themeOptions.pColor}`,
            color: `${themeOptions.sColor}`,
            '&:hover': {
                backgroundColor: '#F5BC00',
            },
            fontSize: '14px',
            fontWeight: 500,
            border: 0,
            borderRadius: '50px',
            padding: '1px 12px',
            lineHeight: '35px',
            minWidth: '100px',
            outline: 'none ',
        }} 
        variant="contained" 
        endIcon={icon ? (<div style={{
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '50px',
            height: '27px',
            width: '27px',
            lineHeight: '29px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>{icon}</div>)
        : 
        <span style={{
            fontSize: '14px',
            textTransform: 'none',
            textAlign: 'center',
            width: '100%',
            marginX: '5px',

        }}></span>}
        >{text}
        </Button>
    );
};

export default CustomButton;