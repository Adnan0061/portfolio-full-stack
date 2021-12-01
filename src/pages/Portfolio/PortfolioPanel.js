import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import resumeData from '../../utils/resumeData';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import ProjectDialague from './ProjectDialague';
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
          <Typography>{children}</Typography>
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

const PortfolioPanel = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = resumeData.projects;

  const tabsSet = [...new Set(resumeData.projects.map(item => item.tag))]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} indicatorColor='none' onChange={handleChange} aria-label="basic tabs example">

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
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {projects.map(project => {

            return (
              <Grid key={project.title} item xs={12} sm={6} md={4}>
                {/* <ProjectDialague> */}
                  <Card>
                    <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://raw.githubusercontent.com/Adnan0061/Helmetrix-client-side/main/src/images/iqbal-2nIBkSxJQ0E-unsplash2.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.shortdesc}
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                {/* </ProjectDialague> */}
              </Grid>)
          }
          )}
        </Grid>
      </TabPanel>

      {tabsSet.map(tag => {
        return (
          <TabPanel value={value} index={tabsSet.indexOf(tag) + 1}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {projects.map(project => {
                return (
                  <>
                  {project.tag == tag &&
                    <Grid key={project.tag} item xs={12} sm={6} md={4}>
                      <ProjectDialague>
                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            // image={`../../assests/images/projects/${project.image}`}
                            image="../../assests/images/mine.JPG"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {project.shortdesc}
                            </Typography>
                          </CardContent>
                        </Card>
                      </ProjectDialague>
                    </Grid>
                  }
                  </>
                )
              })}
            </Grid>
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