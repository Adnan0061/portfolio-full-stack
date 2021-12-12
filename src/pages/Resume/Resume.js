import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Container } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CusstomTimeline, { CusstomTimelineItem } from '../../components/CusstomTimeline/CusstomTimeline';
import './Resume.css'
import { CastForEducation, PersonOutlined, School, Work } from '@mui/icons-material';
import CustomButton from '../../components/Button/CustomButton';
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
// import { height } from '@mui/system';


const underlineColor = {
    background: 'linear-gradient(to bottom, #00000000, #00000000 75%, #FFC500 75%)',
}


const ResumeTimelineItem = ({ title, duration, company, info }) => {
    const [listInfo, setListInfo] = useState([])
    useEffect(()=>{
        setListInfo(info)
    },[info])
    return (
        <CusstomTimelineItem>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ width: '50%', textAlign: 'start' }}>
                        <Typography sx={{ fontSize: '17px', fontWeight: '500', lineHeight: '22px' }} variant='h6'>{title}</Typography>
                    </Box>
                    <Box sx={{ width: '42%', textAlign: 'end' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '300', lineHeight: '18px' }} variant='h6'>{duration}</Typography>
                    </Box>
                </Box>
                <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '18px', mb: 2 }} variant='h6'>{company}</Typography>
                <Box>
                    <ul style={{ paddingLeft: '1rem', }}>
                        {listInfo?.map( list => {
                            return(
                                <>
                                    <li key={list}>{list}</li>
                                </>
                            )
                        })}
                    </ul>
                </Box>
            </Box>

        </CusstomTimelineItem>
    )
}


const Resume = () => {
    return (
        <Box style={{ maxHeight: '75vh', overflow: 'auto' }} sx={{ mt: 3, p: 4, borderRadius: '6px', backgroundColor: 'white', boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)' }}>

            {/* 1 column about  */}
            <Box sx={{ mb: 5 }}>
                <Box>
                    {/* <span style={}></span> */}
                    <Typography sx={{ mb: 4 }} variant='h6'><span style={underlineColor}>About Me</span></Typography>
                </Box>
                <Box>
                    <Typography>{resumeData.about}</Typography>
                </Box>
            </Box>

            <Box sx={{ mb: 5 }}>
                <Typography sx={{ mb: 4 }} variant='h6'><span style={underlineColor}>Resume</span></Typography>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid style={{ maxHeight: '500px', overflow: 'auto' }} item xs={12} sm={14} md={6}>
                        <Box sx={{ top: 0, left: 0, backgroundColor: '#D3D3D322' }}>
                            <CusstomTimeline icon={<Work />} title='Projects'>
                                {
                                    resumeData.resumeProjects.map( data => {
                                        return(
                                        <ResumeTimelineItem key={data.title} title={data.title} duration={data.duration} company={data.company} info={[...data.info]} />
                                        )
                                    })
                                    
                                }


                                <TimelineItem sx={{ minHeight: '35px', }}>
                                    <TimelineSeparator sx={{ pl: '18px' }}>
                                        < TimelineDot sx={{ color: 'black', borderColor: '#ffc500', padding: '2px', marginY: '8px', }} variant="outlined" />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ mt: '-5px', pb: 3 }}>
                                        <Typography sx={{fontWeight: 600}}>The End</Typography>
                                    </TimelineContent>
                                </TimelineItem>

                            </CusstomTimeline>
                            <br />
                            {/* <Box sx={{ mb: 3, mt: -5, ml: 2 }}>
                                <CustomButton sx={{ mb: 3 }} text={'download CV'} icon={<Download sx={{ fontSize: '1rem', pt: '2px' }} />} />
                            </Box> */}
                        </Box>
                    </Grid>

                    <Grid style={{ maxHeight: '500px', overflow: 'auto' }} item xs={12} sm={14} md={6}>
                        <Box sx={{ top: 0, left: 0, backgroundColor: '#D3D3D322' }}>
                            <CusstomTimeline icon={<School />} title='Education'>
                            {
                                    resumeData.education.map( data => {
                                        return(
                                        <ResumeTimelineItem key={data.title} title={data.title} duration={data.duration} company={data.company} />
                                        )
                                    })
                                    
                                }

                                <TimelineItem sx={{ minHeight: '35px', }}>
                                    <TimelineSeparator sx={{ pl: '18px' }}>
                                        < TimelineDot sx={{ color: 'black', borderColor: '#ffc500', padding: '2px', marginY: '8px', }} variant="outlined" />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{ mt: '-5px', pb: 3 }}>
                                        <Typography sx={{fontWeight: 600}}>The End</Typography>
                                    </TimelineContent>
                                </TimelineItem>

                            </CusstomTimeline>
                            <br />
                            {/* <Box sx={{ mb: 3, mt: -5, ml: 2 }}>
                                <CustomButton sx={{ mb: 3 }} text={'download CV'} icon={<Download sx={{ fontSize: '1rem', pt: '2px' }} />} />
                            </Box> */}
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ mb: 5 }}>
                <Typography sx={{ mb: 4 }} variant='h6'><span style={underlineColor}>Skills</span></Typography>
                <Container>
                    <Grid container>
                        {resumeData.skills.map(skill => {
                            return (
                                <Grid key={skill.title} sx={{my: 1}} item xs={12} sm={6} md={3}>
                                    <Box sx={{ backgroundColor: '#D3D3D322', mx: 1, height: '100%', p: 2 }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>{skill.title}</Typography>
                                        <ul style={{ paddingLeft: '1rem', }}>
                                            {
                                                skill.description.map(des => {
                                                    return <li key={des}>{des}</li>
                                                })
                                            }
                                        </ul>
                                    </Box>
                                </Grid>)
                        })
                        }

                    </Grid>
                </Container>
            </Box>

        </Box>
    );
};

export default Resume;