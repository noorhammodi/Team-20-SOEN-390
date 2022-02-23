import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';

const getInitialNameState = () => {
  if (useLocation().state !== null) {
    return { name: useLocation().state.name, role: useLocation().state.role };
  }
  return { name: 'N/A', role: 'N/A' };
};

function Dashboard() {
  const navigate = useNavigate();
  const { name, role } = getInitialNameState();

  const [message] = useState(`Welcome ${name}. Your role is ${role}.`);
  const getMessage = () => message;

  const handleCheckIn = () => {
    navigate('/checkIn');
  };

  return (
    <Container>
      <Box>
        <Typography variant="h3">
          JeVaisBienAller
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4">
          Dashboard
        </Typography>
      </Box>
      <Box>
        <Typography>
          {getMessage()}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={handleCheckIn}
        >
          FILL UP DAILY CHECK IN
        </Button>
      </Box>
    </Container>
  );
}

export default Dashboard;
