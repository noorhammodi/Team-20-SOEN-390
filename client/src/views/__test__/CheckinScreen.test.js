import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument } from '@testing-library/jest-dom';
import CheckinScreen from '../DailyCheckIn';

function MockLogin() {
  return (
    <BrowserRouter>
      <CheckinScreen />
    </BrowserRouter>
  );
}

it('should have some symptoms', async () => {
  render(<MockLogin />);
  const symptom = screen.getByText(/fever/i);
  expect(symptom).toBeInTheDocument();
});
