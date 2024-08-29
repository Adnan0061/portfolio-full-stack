import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import resumeData from '../../utils/resumeData';
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import ProjectDialague from './ProjectDialague';
// import SimpleDialogDemo from './ProjectDialague';
import CustomButton from '../../components/Button/CustomButton';
// import ProjectDialague from './ProjectDialague'

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
        <Box sx={{ p: 3 }}>
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

const ProjectDialogue = ({ project, open, onClose }) => (
  <Dialog maxWidth='xl' open={open} onClose={onClose}>
    <DialogTitle>{project.title} - {project.caption}</DialogTitle>
    <Box sx={{ height: '75vh', width: '100%', border: '3px solid #FFC500', overflowY: 'scroll'}}>
      <img style={{width: '100%'}} src={project.image[1]} alt="" />
    </Box>
    <DialogContent sx={{overflowY: 'scroll'}}>
      <Typography>Description</Typography>
      <ul>
        {project.longdesc.map((list, index) => <li key={index}>{list}</li>)}
      </ul>
    </DialogContent>
    <DialogActions>
      {project?.links.map((link, index) => (
        <Link key={index} style={{textDecoration:'none'}} href={link.link} target="_blank">
          <CustomButton text={link.text} icon={link.icon}/>
        </Link>
      ))}
    </DialogActions>
  </Dialog>
);

const PortfolioPanel = () => {
  const [value, setValue] = useState(0);
  const [projectDialogue, setProjectDialogue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsSet = [...new Set(resumeData.projects.map(item => item.tag))]

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} indicatorColor='none' onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs">

          <Tab sx={{ fontSize: '14px', fontWeight: '600' }} label="All" {...a11yProps(0)} />
          {
            tabsSet.map(tag => {
              return (
                <Tab key={tag} sx={{ fontSize: '14px', fontWeight: '600' }} label={tag} {...a11yProps(tabsSet.indexOf(tag) + 1)} />
              )
            })}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {resumeData.projects.map(project => (
            <Grid key={project.title} item xs={12} md={6} lg={4}>

              <Card sx={{ boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)', borderRadius: '6px' }} height='100%' onClick={() => setProjectDialague(project)}>
                {/* <Card onClick={hamdleOnClick}> */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    align='top'
                    image={project.image[0]}
                  />
                  <CardContent sx={{ height: '100px', borderTop: '3px solid #FFC500' }} >
                    <Typography sx={{ fontSize: '17px', }} gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', height: '45px', overflowY: 'scroll' }} variant="body2" color="text.secondary">
                      {project.shortdesc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
          )}
        </Grid>

        {projectDialogue && <ProjectDialogue project={projectDialogue} open={!!projectDialogue} onClose={() => setProjectDialogue(null)} />}
      </TabPanel>

      {tabsSet.map(tag => {
        return (
          <TabPanel key={tag} value={value} index={tabsSet.indexOf(tag) + 1}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {resumeData.projects.map(project => {
                return (
                  <>
                    {project.tag === tag &&
                      <Grid key={project.tag} item xs={12} md={6} lg={4}>

                        <Card sx={{ boxShadow: '0 2px 92px 0 rgba(0,0,0,0.13)', borderRadius: '6px' }} height='100%' onClick={() => setProjectDialague(project)}>
                          {/* <Card onClick={hamdleOnClick}> */}
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="140"
                              align='top'
                              image={project.image[0]}
                            />
                            <CardContent sx={{ height: '100px', borderTop: '3px solid #FFC500' }} >
                              <Typography sx={{ fontSize: '17px', }} gutterBottom variant="h5" component="div">
                                {project.title}
                              </Typography>
                              <Typography sx={{ fontSize: '14px', height: '45px', overflowY: 'scroll' }} variant="body2" color="text.secondary">
                                {project.shortdesc}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    }
                  </>
                )
              })}
            </Grid>
            {projectDialague && <ProjectDialague />}
          </TabPanel>
        )
      }
      )}


      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}

    </Box>
  );
}

export default PortfolioPanel;
