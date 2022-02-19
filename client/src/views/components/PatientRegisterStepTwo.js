import React, { useState } from 'react';
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

function PatientRegisterStepTwo() {
  const classes = useStyles();

  return (
    <div className={classes.step1}>
      <Typography variant="h5" className={classes.stepName}>
        Medical Information
      </Typography>
      <div className={classes.formContainer}>
        <form>
          <TextField
            label="First Name"
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            className={classes.formInput}
          />
          <TextField
            label="Health Insurance Number"
            variant="outlined"
            className={classes.formInput}
          />
        </form>
      </div>
    </div>
  );
}

export default PatientRegisterStepTwo;
