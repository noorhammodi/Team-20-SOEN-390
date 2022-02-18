import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'; //  useLocation??

import {
  Paper,
  Button,
  Typography,
  TextField,
  Divider,
  InputAdornment,
} from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import CreateIcon from '@mui/icons-material/Create';

import loginService from '../services/login';

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    // for <form>s
    event.preventDefault();
    try {
      const payload = {
        email,
        password,
      };

      // Get response from axios
      const response = await loginService.login(payload);
      if (response.status === 200) {
        setIsError(false);
        navigate('/dashboard', { state: { name: response.data.firstName, role: response.data.role } });
      }
    } catch (exception) {
      setIsError(true);
      setMessage('Error: Wrong Credentials');
    }
  };

  const handleBack = () => {
    navigate('/register');
  };

  const handleEmailChange = ({ target }) => setEmail(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);
  const getMessage = () => message;

  const renderErrorMessage = () => {
    if (isError) {
      return <Typography>{getMessage()}</Typography>;
    }
    return '';
  };

  return (
    <Paper>
      <Typography variant="h3">
        JeVaisBienAller
      </Typography>
      <div>
        <TextField
          id="filled-basic"
          defaultValue="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>),
          }}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <TextField
          id="filled-password-input"
          type="password"
          defaultValue="Password"
          autoComplete="current-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>),
          }}
          onChange={handlePasswordChange}
        />
      </div>
      <div>{renderErrorMessage()}</div>
      <div>
        <Button variant="contained" startIcon={<LoginIcon />} onClick={handleSubmit}>
          LOGIN
        </Button>
      </div>
      <div>
        <Typography> FORGOT PASSWORD? </Typography>
      </div>
      <Divider />
      <div>
        <Button variant="outlined" startIcon={<CreateIcon />} onClick={handleBack}>
          CREATE NEW ACCOUNT
        </Button>
      </div>
    </Paper>
  );
}

export default LoginScreen;
