import React from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Button,
} from '@mui/material';

function RegisterRole(props) {
  const { nextStep, handleChange } = props;

  const handleNext = () => {
    nextStep();
  };

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
            name="role"
            onChange={handleChange}
          >
            <FormControlLabel value="patient" control={<Radio />} label="Patient" />
            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
          </RadioGroup>
        </FormControl>
        <Box>
          <Button
            variant="contained"
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default RegisterRole;
