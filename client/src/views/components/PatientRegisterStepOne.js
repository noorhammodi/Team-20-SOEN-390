import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

import {
  Typography,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  createStyles({
    step1: {
      justifyContent: 'center',
      // display: "grid",
      // position: "relative",
    },
    stepName: {
      textAlign: 'center',
      color: '#FDC500',
      paddingTop: '20px',
    },
    formContainer: {
      // position: "relative",
      // width: "50%",
      // height: "auto",
      padding: '2rem',
    },
    formInput: {
      width: '100%',
      paddingBottom: '20px !important',
    },
  }),
);

function PatientRegisterStepOne() {
  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });

  const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword,
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.step1}>
      <Typography variant="h5" className={classes.stepName}>
        Register as a Patient
      </Typography>
      <div className={classes.formContainer}>
        <form>
          <TextField
            endIcon={<EmailIcon />}
            label={(
              <>
                <EmailIcon fontSize="small" />
                Email
              </>
                        )}
            variant="outlined"
            className={classes.formInput}
          />
          <FormControl
            variant="outlined"
            className={classes.formInput}
          >
            <InputLabel>
              <PasswordIcon fontSize="small" />
              Password
            </InputLabel>
            <OutlinedInput
              label={(
                <>
                  <PasswordIcon fontSize="small" />
                  Password
                </>
                    )}
              type={showPasswordValue.showPassword ? 'text' : 'password'}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPasswordValue.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                            )}
            />
          </FormControl>
          <FormControl
            variant="outlined"
            className={classes.formInput}
          >
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              label="Confirm Password"
              type={showConfirmPasswordValue.showConfirmPassword ? 'text' : 'password'}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowConfirmPassword}>
                    {/* eslint-disable-next-line max-len */}
                    {showConfirmPasswordValue.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                            )}
            />
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default PatientRegisterStepOne;
