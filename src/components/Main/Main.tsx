import Title from '@/utils/Title';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import ConctactBlock from '@/components/Main/Сontact/ConctactBlock';
import Form from './Сontact/FormBlock';

function Main() {
  return (
    <>
      <Title />
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ConctactBlock />
        <Form />
      </Box>
    </>
  );
}

export default Main;
