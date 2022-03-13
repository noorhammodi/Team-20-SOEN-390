/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import adminService from '../services/admin';

function ListUsers() {
  const [data, setData] = useState('');
  useEffect(() => {
    getUsers();
  }, [data]);

  async function getUsers() {
    await adminService.getAll().then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error('Error' + error);
    });
  }

  return (
    <p>
      { JSON.stringify(data) }
    </p>
  );
}

export default ListUsers;
