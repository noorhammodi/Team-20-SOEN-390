import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function DailyCheckIn() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <>
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

      <Button
        variant="contained"
        float="right"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </>
  );
}

export default DailyCheckIn;
