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
import RegisterUserInfo from '../components/register/RegisterUserInfo';
import RegisterCredentials from '../components/register/RegisterCredentials';
import Success from '../components/register/Success';

const imageBackground = require('../public/images/login-background.png');

function RegisterScreen() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({
    role: '',
    firstName: '',
    lastName: '',
    hin: '',
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const changeHandle = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Proceed to last step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle Role

  const onSubmit = async (event) => {
    // for <form>s
    event.preventDefault();
    console.log(inputs);
    try {
      const payload = {
        ...inputs,
      };

      // Get response from axios
      const response = await registerService.register(payload);
      if (response.status === 200) {
        setIsError(false);
        setMessage('Thank you for registering.');
        navigate('/');
      }
    } catch (exception) {
      setIsError(true);
      setMessage('Error: Could not register');
    }
  };

  const values = {
    ...inputs,
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
              handleChange={changeHandle}
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
            <RegisterUserInfo
              nextStep={nextStep}
              handleChange={changeHandle}
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
            <RegisterCredentials
              nextStep={nextStep}
              handleChange={changeHandle}
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
            <Success
              nextStep={nextStep}
              onSubmit={onSubmit}
              values={values}
            />
            <br />
          </Paper>
        </Box>
      );
    case 5:
      navigate('/');
      break;
    default:
  }
}

export default RegisterScreen;
