import React from 'react';
import { Box, Button, Typography } from '@mui/material';
// import { fontSize, fontWeight, padding } from '@mui/system';
import myself from '../../assests/images/mine.JPG'
import './Profile.css'
import CusstomTimeline, { CusstomTimelineItem } from '../CusstomTimeline/CusstomTimeline';
import resumeData from '../../utils/resumeData';
import { Download, FileDownload, PersonOutlined } from '@mui/icons-material';
import CustomButton from '../Button/CustomButton';
import { Link } from 'react-router-dom';


const ProfileTimelineItem = ({ title, text, link}) => {
    return(
    <CusstomTimelineItem>
            { link ? (
            <Typography sx={{ fontSize: '15px'}}>
                <span style={{fontWeight: 'bold'}}>{title}: </span><a style={{textDecoration: 'none'}} href={link} target='_blank' rel='noreferrer'>{text}</a>
            </Typography>

            ) : (
                <Typography sx={{fontSize: '15px'}}>
                <span style={{fontWeight: 'bold', }}>{title}: </span> {text}
            </Typography>
            )}
    </CusstomTimelineItem>
    )
}

const Profile = () => {
    // const { name, title, email, github, LinkedIn } = resumeData

    const profile = {
        backgroundColor: "white",
        borderRadius: "6px",
        width: "100%",
        display: "inline-block",
    }
    const profile_name = {
        lineHeight: '18px',
        padding: '20px'
    }
    const profile_name_name = {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: 'bold'
    }
    const profile_name_title = {
        fontSize: '17px',
        color: '#777'
    }

    return (
        <Box sx={{ backgroundColor: 'white',  boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)', borderRadius: '5px' }}>
            <Box sx={profile}>
                <Box sx={profile_name}>
                    <Typography sx={profile_name_name}>{resumeData.name}</Typography>
                    <Typography sx={profile_name_title}>{resumeData.title}</Typography>
                </Box>
            </Box>

            <figure className='profile_image'>
                <img className='profile_image_img' src={myself} alt='' />
            </figure>

            <Box sx={{top: 0, left: 0, marginTop: '-45px', padding: '7px'}}>
                <CusstomTimeline icon={<PersonOutlined />}>
                    <ProfileTimelineItem title='Name' text={resumeData.name} />
                    <ProfileTimelineItem title='Email' text={resumeData.email} />
                    <ProfileTimelineItem title='LinkedIn' text={resumeData.socials.linkedin.text} link={resumeData.socials.linkedin.link} />
                    <ProfileTimelineItem title='GitHub' text={resumeData.socials.github.text} link={resumeData.socials.github.link} lastConnector='none' />
                </CusstomTimeline> 
                <br />
                <Box sx={{mb:3, mt: -5, ml: 2}}>
                <Link style={{textDecoration:'none'}} to="../../assests/ADNAN AHMED - Resume - MERN Stack Developer.pdf" target="_blank" download><CustomButton sx={{mb: 3}} text={'Download Resume'} icon={<Download sx={{fontSize: '1rem', pt: '2px'}}/>}/></Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;