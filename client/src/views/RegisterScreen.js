/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigate } from 'react-router-dom'; // useLocation??
import {
  Box,
  Paper,
  Button,
  Typography,
  TextField,
  Divider,
  InputAdornment,
} from '@mui/material';
import Logo from '../components/Logo';
import registerService from '../services/register';
import RegisterRole from '../components/register/RegisterRole';

const imageBackground = require('../public/images/login-background.png');

function RegisterScreen() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hin, setHIN] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Proceed to last step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle state
  const handleChange = (input, event) => {
    // input = event.target.value;
  };

  const onSubmit = async (event) => {
    // for <form>s
    event.preventDefault();
    try {
      const payload = {
        email,
        firstName,
        lastName,
        hin,
        password,
        role,
      };

      // Get response from axios
      const response = await registerService.register(payload);
      if (response.status === 200) {
        setIsError(false);
        setMessage('Thank you for registering.');
        navigate('/login');
      }
    } catch (exception) {
      setIsError(true);
      setMessage('Error: Could not register');
    }
  };

  const values = {
    role,
    firstName,
    lastName,
    hin,
    email,
    password,
  };

  switch (step) {
    case 1:
      return (
        <Box>
          <Logo type="extend" />
          <br />
          <Paper
            sx={{ p: 2 }}
          >
            <br />
            <RegisterRole
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    case 2:
      return (
        <Box>
          <Logo type="extend" />
          <br />
          <Paper
            sx={{ p: 2 }}
          >
            <br />
            <RegisterRole
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    case 3:
      return (
        <Box>
          <Logo type="extend" />
          <br />
          <Paper
            sx={{ p: 2 }}
          >
            <br />
            <RegisterRole
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    case 4:
      return (
        <Box>
          <Logo type="extend" />
          <br />
          <Paper
            sx={{ p: 2 }}
          >
            <br />
            <RegisterRole
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    case 5:
      return (
        <Box>
          <Logo type="extend" />
          <br />
          <Paper
            sx={{ p: 2 }}
          >
            <br />
            <RegisterRole
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    default:
  }
}

export default RegisterScreen;
