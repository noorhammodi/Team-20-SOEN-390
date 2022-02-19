import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Box,
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
  const { name, role } = getInitialNameState();

  const [message] = useState(`Welcome ${name}. Your role is ${role}.`);
  const getMessage = () => message;

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
    </Container>
  );
}

export default Dashboard;
