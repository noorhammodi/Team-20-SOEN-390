import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function RegisterCredentials(props) {
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
          CREATE LOGIN CREDENTIALS
        </Typography>
        <br />
        <br />
        <Box>
          <TextField
            id="filled-basic"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <br />
        <Box>
          <TextField
            id="filled-basic"
            placeholder="Password"
            name="password"
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

export default RegisterCredentials;
