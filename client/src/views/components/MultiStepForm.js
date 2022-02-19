import React, { useState } from 'react';
import {
  Stepper, Step, StepLabel, Button,
} from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PatientRegisterStepOne from './PatientRegisterStepOne';
import PatientRegisterStepTwo from './PatientRegisterStepTwo';

const useStyles = makeStyles(
  createStyles({
    registerForm: {
      width: '50%',
      margin: '6px auto',
      border: '1px solid #999',
      padding: '30px',
      // display: "grid",
    },
    btn: {
      margin: '20px !important',
      width: '30%',
      backgroundColor: '#00296B !important',
    },
  }),
);
function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  function getSteps() {
    return ['CREDENTIALS', 'MEDICAL INFO', 'VERIFY'];
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PatientRegisterStepOne />;
      case 1:
        return <PatientRegisterStepTwo />;
      case 2:
        return 'Step 3 (VERIFY)';
      default:
        return 'Unknown Step';
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.registerForm}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? 'Completed' : (
        <>
          {getStepContent(activeStep)}
          { activeStep > 0
          && (
          <Button selected onClick={handlePrev} variant="contained" type="submit" className={classes.btn}>
            BACK
          </Button>
          )}
          <Button selected onClick={handleNext} variant="contained" type="submit" className={classes.btn} endIcon={<ArrowForwardIosIcon />}>
            {activeStep === steps.length - 1 ? 'FINISH' : 'NEXT'}
          </Button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
