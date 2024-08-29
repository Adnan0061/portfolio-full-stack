import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import './CusstomTimeline.css'

const CustomTimeline = ({ title, icon, children }) => {
    const timeline = {
        padding: 0,
    }
    const timeline_firstItem = {
        minHeight: '20px',
    }
    const timeline_dot_header = {
        backgroundColor: '#ffc500',
        color: 'black',
        fontSize: '20rem',
        padding: '8px',
        marginBottom: '5px'
    }
    const timeline_header = {
        mt: '15px',
        mb: '50px'
    }
    
    return (
        <div>
            <Timeline sx={timeline}>
                {/* heading item */}
                <TimelineItem sx={timeline_firstItem}>
                    <TimelineSeparator>
                        <TimelineDot sx={timeline_dot_header}>{icon}</TimelineDot>
                        <TimelineConnector sx={{backgroundColor: '#EEEEEE'}} />
                    </TimelineSeparator>
                    <TimelineContent sx={timeline_header} variant='h6'>
                        {title}
                    </TimelineContent>
                </TimelineItem>
                {children}
            </Timeline>
        </div>
    );
};

export const CustomTimelineItem = ({children, lastConnector}) => {
    const timeline_dot = {
        color: 'black',
        borderColor: '#ffc500',
        padding: '2px',
        marginY: '8px',
    }
    return (
        <TimelineItem sx={{minHeight: '35px'}}>
            <TimelineSeparator sx={{ pl: '18px'}}>
                <TimelineDot sx={timeline_dot} variant="outlined" />
                <TimelineConnector sx={{backgroundColor: '#EEEEEE', height: '5px', display: lastConnector ? 'none' : 'block' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ mt: '-4px', pb: 2}}>
                {children}
            </TimelineContent>
        </TimelineItem>
    )
}

export default CustomTimeline;
