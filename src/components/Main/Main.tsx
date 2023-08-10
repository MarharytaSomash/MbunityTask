import Title from '@/utils/Title';
import { Box } from '@mui/material';
import React from 'react';
import ConctactBlock from '@/components/Main/Contact/ConctactBlock';

function Main() {
  return (
    <Box sx={{ width: '1440px', background: '#f9f9f9' }}>
      <Title />
      <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '50px' }}>
        <ConctactBlock />
      </Box>
    </Box>
  );
}

export default Main;
