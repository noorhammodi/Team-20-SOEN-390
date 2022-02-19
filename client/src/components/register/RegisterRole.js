import React from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from '@mui/material';

function RegisterRole() {
  return (
    <div>
      <Box
        textAlign="center"
      >
        <Typography
          color="secondary"
        >
          SELECT YOUR ROLE
        </Typography>
        <br />
        <br />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="patient"
            name="radio-buttons-group"
          >
            <FormControlLabel value="patient" control={<Radio />} label="Patient" />
            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default RegisterRole;
