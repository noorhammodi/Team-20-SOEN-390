import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Divider,
  List,
  Stack,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import Sidebar from '../components/Sidebar';

function DailyCheckIn() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };
  const handleExit = () => {
    navigate('/dashboard');
  };

  const commonStyles = {
    bgcolor: '#F0F0F0',
    borderColor: '#00296B !important',
    m: 1,
    border: 5,
    width: '1510px',
    height: '720px',
    boxShadow: 3,
  };

  return (
    <>

      <Sidebar />
      <Box>
        <Typography variant="h1" style={{ color: '#00296B' }}>
          Daily check in
          <FactCheckIcon sx={{ fontSize: 70, color: '#00296B', position: 'center' }} />

        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>

        <Box sx={{ ...commonStyles, borderRadius: 2 }}>

          <List>

            <ListItem>
              <ListItemText primary="Do you have any of the following signs or symptoms (new or worsening)? Symptoms should not be chromic or related to other known causes or conditions." />
            </ListItem>
            <List>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Fever or chills" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Sudden loss of sense of smell and taste" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Difficulty breathing or shortness of breath" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Cough (new or worsening)" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Runny or stuffy nose (of unknown cause)" />
              </ListItem>
            </List>
            <Divider />
            <ListItem
              secondaryAction={
                <Checkbox />
          }
            >
              <ListItemText primary="Have you traveled outside of Canada in the past 14 days?" />
            </ListItem>
            <Divider />
            <ListItem
              secondaryAction={
                <Checkbox />
          }
            >
              <ListItemText primary="Have you been in close contact with a confirmed or suspected case of COVID-19?" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Do you have at least two of the following symptoms?" />
            </ListItem>
            <List>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Unusual severe fatigue, for no obvious reason" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Unusual headache" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Significant loss of appetite" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Unusual or unexplained muscle pain or stiffness (not related to physical activity)" />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Checkbox />
            }
              >
                <ListItemText sx={{ paddingLeft: '5%' }} primary="Sore throat without obvious cause  " />
              </ListItem>
            </List>
          </List>
        </Box>
      </Box>
      <Stack direction="row" spacing={1}>
        <Button
          variant="contained"
          float="left"
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
        <Button
          variant="contained"
          float="left"
          onClick={handleExit}
        >
          Exit without saving
        </Button>
      </Stack>
      <br />
      <br />
    </>
  );
}

export default DailyCheckIn;
