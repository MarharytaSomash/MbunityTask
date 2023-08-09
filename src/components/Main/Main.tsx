import Title from '@/utils/Title';
import { Box } from '@mui/material';
import React from 'react';
import ConctactBlock from '@/components/Main/Contact/ConctactBlock';

function Main() {
  return (
    <>
      <Title />
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <ConctactBlock />
      </Box>
    </>
  );
}

export default Main;
