import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

function RegisterCredentials(props) {
  const { handleChange } = props;

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
        <Box>
          <TextField
            id="filled-basic"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>),
            }}
          />

        </Box>
        <br />
        <Box>
          <TextField
            id="filled-password-input"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            name="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>),
            }}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </Box>
    </div>
  );
}

export default RegisterCredentials;
