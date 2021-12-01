import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import { Grid, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CustomButton from '../../components/Button/CustomButton';
import { Send } from '@mui/icons-material';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8dvo0je', 'template_2m3m1yb', e.target, 'user_66uJLSDmBozUpsDoupkmB',)
          .then((result) => {
              console.log(result);
              alert('success')
            }, (error) => {
                console.log(error.text);
                alert('error')
          });
    };

    return (
        <Box style={{ maxHeight: '75vh', overflow: 'auto' }} sx={{ mt: 3, p: 4, borderRadius: '6px', backgroundColor: 'white', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)' }}>
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={12} sm={12} md={7}>
                        <Typography sx={{ mb: 4 }} variant='h6'>Contact Form</Typography>
                        
                        <form ref={form} onSubmit={sendEmail}>

                            <TextField
                                sx={{pr:1, pb:3}}
                                id="standard-basic" 
                                label="Name" 
                                variant="standard"
                                type='text'
                                name='user_name' 
                            />
                            
                            <TextField 
                                id="standard-basic" 
                                label="Email" 
                                variant="standard" 
                                type='text'
                                name='user_email' 
                            />
                            
                            <TextField
                                id="standard-multiline-static"
                                label="Message & Email please"
                                multiline
                                sx={{width: '90%', mb:3}}
                                rows={3}
                                variant="standard"
                                type='text'
                                name="message"
                            />
                            {/* <input type="submit" value="Send" /> */}
                            <CustomButton sx={{mt:10}} type='submit' text={'Send'} icon={<Send sx={{fontSize: '17px'}}/>} value ='send' />
                        </form>
                    </Grid>

                    <Grid item xs={12} sm={12} md={5}>
                        <Typography sx={{ mb: 4 }} variant='h6'>Contact Info</Typography>
                        <Typography sx={{pt:2, pb:1, color: 'gray', fontSize: '15px'}}><span style={{color: 'black',}}>Address:</span> Tejgaon, Dhaka, Bangladesh</Typography>
                        <Typography sx={{ pb:1, color: 'gray', fontSize: '15px'}}><span style={{color: 'black',}}>Email:</span> adnan.ahmed0061@gmail.com</Typography>
                        <Typography sx={{ pb:1, color: 'gray', fontSize: '15px'}}><span style={{color: 'black',}}>WhatsApp</span>: +8801911285740</Typography>

                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;