import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Paper,
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
    <Paper>
      <div>
        <Typography variant="h3">
          JeVaisBienAller
        </Typography>
      </div>
      <div>
        <Typography variant="h4">
          Dashboard
        </Typography>
      </div>
      <div>
        <Typography>
          {getMessage()}
        </Typography>
      </div>
    </Paper>
  );
}

export default Dashboard;
