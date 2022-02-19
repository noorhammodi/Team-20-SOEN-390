import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function RegisterUserInfo(props) {
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
          COMPLETE YOUR PERSONAL INFORMATION
        </Typography>
        <br />
        <br />
        <Box>
          <TextField
            id="filled-basic"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />
        </Box>
        <br />
        <Box>
          <TextField
            id="filled-basic"
            placeholder="Health Insurance Number"
            name="hin"
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <br />
        <br />
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

export default RegisterUserInfo;
